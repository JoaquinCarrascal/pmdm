import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../model/ipokemon.interface';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent implements OnInit{

  @Output() sendAttack = new EventEmitter<number>();
  pokemon1: PokemonResponse | undefined;
  pokemon2: PokemonResponse | undefined;
  itsYourTurn: boolean | undefined;
  turn: boolean = Math.random() >= 0.5;

  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemon(137).subscribe((pokemon: PokemonResponse) => this.pokemon1 = pokemon);
    this.pokemonService.getPokemon(200).subscribe((pokemon: PokemonResponse) => this.pokemon2 = pokemon);

    console.log(this.pokemon1);
    console.log(this.pokemon2);

  }

  attackOther($event: number) {

    this.sendAttack.emit($event);

  }

  proceedAttack($event: Event) {
    
    
      


    }



}
