import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  pokemonDetail: any;

  constructor( private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
    this.pokemonService.getPokemonDetail(+id).subscribe((data) => {
      this.pokemonDetail = data;
    })
    });
  }


  savePokemon() {
    const pokemonData = {
        id : this.pokemonDetail.id,
        name: this.pokemonDetail.name,
        height: this.pokemonDetail.height,
        weight: this.pokemonDetail.weight,
        is_default: this.pokemonDetail.is_default,
        is_hidden: this.pokemonDetail.abilities[0].is_hidden
    };

    this.pokemonService.savePokemon(pokemonData).subscribe(
        response => {
            console.log('Pokemon saved successfully', response);
        },
        error => {
            console.error('Error saving Pokemon', error);
        }
    );
}
  
}

// https://www.transparentpng.com/cats/pokemon-396.html   desine link

// item: Product = {}
//   order: CustomerOrder = {};

//   ngOnInit(): void {
//     this.activatedRoute.paramMap.subscribe(params => {
//       let id = params.get("id") ?? 0;

//       this.productService.getItem(+id).subscribe(data => {
//         this.item = data;
//         this.stars = new Array(this.item.rating);
//         this.submitStatus = false;        // if submitStatus is false then is showing confirm box, if it is true it is not showing
//       })
//     });
//   
