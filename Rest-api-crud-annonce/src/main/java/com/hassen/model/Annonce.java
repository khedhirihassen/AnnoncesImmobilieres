package com.hassen.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Annonce {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long id;
	
	private String titre;
	
	private String description;
	
	private String image;
	
	private Date datePublication;
	
	private double prix ;

}
