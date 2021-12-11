package com.hassen.web;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hassen.Exception.AnnonceNotFoundException;
import com.hassen.dao.AnnonceRepository;
import com.hassen.model.Annonce;

@RestController
@RequestMapping("/annonces")
public class AnnonceController {
	
	@Autowired
	private AnnonceRepository annonceRepository;
	
	// méthode pour retourner tous les annonces au niveau de BD
	@GetMapping
	public ResponseEntity<List<Annonce>> getAllAnnonces(){
		List<Annonce> annonces = annonceRepository.findAll();
		return new ResponseEntity<>(annonces,HttpStatus.OK);
	}
	
	// méthode pour retourner l'annonce selon son id
	@GetMapping("/find/{id}")
	public ResponseEntity<Annonce> getAnnonceById(@PathVariable("id")Long id){
		Annonce annonce = annonceRepository.findById(id)
				.orElseThrow(()-> new AnnonceNotFoundException("Annonce by Id "+id+" was not found"));
		return new ResponseEntity<>(annonce,HttpStatus.OK);
	}
	
	// méthode pour ajouter un nouvel annonce
	@PostMapping("/add")
	public ResponseEntity<Annonce> addAnnonce(@RequestBody Annonce annonce){
		annonce.setDatePublication(new Date());
		Annonce newAnnonce = annonceRepository.save(annonce);
		return new ResponseEntity<>(newAnnonce , HttpStatus.OK);
	}
	
	// méthode pour modifier annonce
	@PutMapping("/update")
	public ResponseEntity<Annonce> updateAnnonce(@RequestBody Annonce annonce){
		Annonce updatedAnnonce = annonceRepository.save(annonce);
		return new ResponseEntity<>(updatedAnnonce , HttpStatus.OK);
	}
	
	

}
