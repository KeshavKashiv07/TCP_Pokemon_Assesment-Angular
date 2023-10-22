package com.pokemon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.pokemon.service.*;
import com.pokemon.entity.*;

@RestController
@RequestMapping("/api/pokemon")
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @PostMapping("/save")
    public void savePokemon(@RequestBody Pokemon pokemon) {
        pokemonService.savePokemon(pokemon);
    }
}

