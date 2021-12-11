package com.hassen.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hassen.model.Annonce;

public interface AnnonceRepository extends JpaRepository<Annonce, Long> {
	
	public Optional<Annonce> findById(Long id);

}
