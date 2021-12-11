package com.hassen;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.hassen.dao.AnnonceRepository;
import com.hassen.model.Annonce;

@SpringBootApplication
public class RestApiCrudAnnonceApplication implements CommandLineRunner {

	@Autowired
	private AnnonceRepository annonceRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(RestApiCrudAnnonceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		Annonce firstAnnonce = annonceRepository.save(new Annonce(1L,"PC Lenovo","A vendre pc lenovo Thinkpad","image.jpg",new Date(),1200.00));
		Annonce secondAnnonce = annonceRepository.save(new Annonce(2L,"PC HP","A vendre pc HP","image.jpg",new Date(),900.00));
		Annonce thirdAnnonce = annonceRepository.save(new Annonce(3L,"Iphone 5s","A vendre Iphone 5s","image.jpg",new Date(),850.00));
		Annonce fourthAnnonce = annonceRepository.save(new Annonce(4L,"TV Samsung","A vendre TV Samsung LCD","image.jpg",new Date(),2400.00));
	}

}
