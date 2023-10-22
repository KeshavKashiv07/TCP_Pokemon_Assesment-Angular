package com.pokemon.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pokemon.entity.Pokemon;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
}

