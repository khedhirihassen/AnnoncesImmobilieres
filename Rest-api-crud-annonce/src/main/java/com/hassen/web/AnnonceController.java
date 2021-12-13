package com.hassen.web;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

import java.util.Date;
import java.util.List;

import javax.servlet.ServletContext;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.hassen.Exception.AnnonceNotFoundException;
import com.hassen.dao.AnnonceRepository;
import com.hassen.model.Annonce;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/annonces")
public class AnnonceController {

	@Autowired
	private AnnonceRepository annonceRepository;
	@Autowired
	ServletContext context;

	/*
	 * Methode pour retourner tous les annonces existant
	 */
	@GetMapping
	public ResponseEntity<List<Annonce>> getAllAnnonces() {
		List<Annonce> annonces = annonceRepository.findAll();
		return new ResponseEntity<>(annonces, HttpStatus.OK);
	}

	/*
	 * Methode pour retourner l'annonce selon son id
	 */
	@GetMapping("/find/{id}")
	public ResponseEntity<Annonce> getAnnonceById(@PathVariable("id") Long id) {
		Annonce annonce = annonceRepository.findById(id)
				.orElseThrow(() -> new AnnonceNotFoundException("Annonce by Id " + id + " was not found"));
		return new ResponseEntity<>(annonce, HttpStatus.OK);
	}

	/*
	 * Methode pour ajouter un nouveau annonce
	 */
	@PostMapping("/add")
	public ResponseEntity<Annonce> createAnnonce(@RequestParam("file") MultipartFile file,
			@RequestParam("titre") String titre, @RequestParam("description") String description,
			@RequestParam("prix") double prix) throws JsonParseException, JsonMappingException, Exception {

		Annonce newAnnonce = new Annonce();
		newAnnonce.setTitre(titre);
		newAnnonce.setDescription(description);
		newAnnonce.setPrix(prix);

		// Pour vérifier s'il existe un directory au niveau de serveur sous le nom
		// Images sinon il cree un
		// afin de stocker les images là bas
		boolean isExit = new File(context.getRealPath("/Images/")).exists();
		if (!isExit) {
			new File(context.getRealPath("/Images/")).mkdir();
		}
		String filename = file.getOriginalFilename();
		String newFileName = FilenameUtils.getBaseName(filename) + "." + FilenameUtils.getExtension(filename);
		File serverFile = new File(context.getRealPath("/Images/" + File.separator + newFileName));
		try {
			FileUtils.writeByteArrayToFile(serverFile, file.getBytes());
		} catch (Exception e) {
			e.printStackTrace();
		}
		newAnnonce.setImage(newFileName);
		Annonce savedAnnonce = annonceRepository.save(newAnnonce);

		return new ResponseEntity<>(savedAnnonce, HttpStatus.OK);
	}

	// Methode pour charger l'image liée au annonce
	@GetMapping(path = "/ImageAnnonce/{id}")
	public byte[] getPhoto(@PathVariable("id") Long id) throws Exception {
		Annonce annonce = annonceRepository.findById(id).get();
		return Files.readAllBytes(Paths.get(context.getRealPath("/Images/") + annonce.getImage()));
	}

	// Methode pour modifier annonce
	@PutMapping("/update")
	public ResponseEntity<Annonce> updateAnnonce(@RequestBody Annonce annonce) {
		Annonce updatedAnnonce = annonceRepository.save(annonce);
		return new ResponseEntity<>(updatedAnnonce, HttpStatus.OK);
	}

}
