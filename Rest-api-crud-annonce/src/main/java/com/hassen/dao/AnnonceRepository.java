package com.hassen.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hassen.model.Annonce;

public interface AnnonceRepository extends JpaRepository<Annonce, Long> {

}
