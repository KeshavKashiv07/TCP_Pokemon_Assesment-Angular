import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pokemonData: { imageUrl: string; name: string, id:number }[] = [];

  displayedPokemonData: { imageUrl: string; name: string, id:number }[] = [];
  displayLimit: number = 12;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMoreCards();
  }

  loadMoreCards() {
    this.displayLimit = this.displayLimit + 12;
    this.fetchPokemonData(this.displayLimit - 11, this.displayLimit);
  }

  fetchPokemonData(startId: number, endId: number) {
    for (let id = startId; id <= endId; id++) {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

      this.http.get<any>(apiUrl).subscribe((response) => {
        const imageUrl = response.sprites.other.dream_world.front_default;
        const name = response.name.toUpperCase();

        this.pokemonData.push({ imageUrl, name,id });
      });
    }

    this.displayedPokemonData = this.pokemonData.slice(0, this.displayLimit);
  }
}
