import { HttpClient } from '@angular/common/http';
import { Component,Input } from '@angular/core';
import { PokemonService } from 'src/pokemon.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent {

  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() id: any = '';
}
