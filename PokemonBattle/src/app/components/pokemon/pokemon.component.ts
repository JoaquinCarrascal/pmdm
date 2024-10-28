import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonResponse } from '../../model/ipokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{
  
  @Input() pokemon: PokemonResponse | undefined;
  @Input() attackDeactivate: boolean | undefined;
  @Output() attackOtherEmiter = new EventEmitter<number>();

  id: number | undefined;
  pokemonHealth: number = 100;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.id = this.pokemon?.id;

  }

  createImgUrl(idImg: number): string{

    if(idImg)
      return this.pokemonService.createImgUrl(idImg);
    else
      return '';

    }

  attackOther() {
    
    this.attackOtherEmiter.emit(20);

  }

  recieveAttack($event: number) {
      
    this.pokemonHealth -= $event;

  }

}
