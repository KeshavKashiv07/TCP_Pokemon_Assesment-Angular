import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // All_url = "https://pokeapi.co/api/v2/pokemon/"

  // constructor( private http : HttpClient) { }

  // getAllPokemon(): Observable<any> {
  //   return this.http.get<any>(this.All_url);
  //  }

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private apiUrl = 'http://localhost:8080/api/pokemon/save';
  constructor(private http: HttpClient) {}

  getPokemonDetail(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }
  savePokemon(pokemon: any) {
    return this.http.post(this.apiUrl, pokemon);
}
}
