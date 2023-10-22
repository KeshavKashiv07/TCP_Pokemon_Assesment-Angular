package com.pokemon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pokemon.dao.PokemonRepository;
import com.pokemon.entity.*;
@Service
public class PokemonService {

    @Autowired
    private PokemonRepository pokemonRepository;

    public void savePokemon(Pokemon pokemon) {
        pokemonRepository.save(pokemon);
    }
}

