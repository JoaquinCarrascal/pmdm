import { Component, OnInit} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../model/ipokemon.interface';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent implements OnInit{

  pokemonL: [PokemonResponse , number] | undefined;
  pokemonR: [PokemonResponse , number] | undefined;
  turn: boolean = true;
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemon(Math.floor(Math.random() * 1025) + 1).subscribe((pokemon: PokemonResponse) => this.pokemonL = [pokemon , 100]);
    this.pokemonService.getPokemon(Math.floor(Math.random() * 1025) + 1).subscribe((pokemon: PokemonResponse) => this.pokemonR = [pokemon , 100]);
    this.turn = Math.random() >= 0.5;

  }

  processAttack(data: number[]) {
    
    if(this.pokemonL !== undefined && this.pokemonR !== undefined){

      if(this.pokemonL[0].id === data[1] && this.turn === true){
        
        this.pokemonR[1] -= data[0];

        this.turn = false;

        if(this.pokemonR[1]<=0){
          
          alert("Ha ganado: " + this.pokemonL[0].name);

          this.ngOnInit();

        }

      }
      if(this.pokemonR[0].id === data[1] && this.turn === false){

        this.pokemonL[1] -= data[0];

        this.turn = true;
        
        if(this.pokemonL[1]<=0){
          
          alert("Ha ganado: " + this.pokemonR[0].name);

          this.ngOnInit();

        }

      }
    }

  }



}
