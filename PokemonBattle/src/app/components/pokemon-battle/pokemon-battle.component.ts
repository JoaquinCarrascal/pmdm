import { Component, ViewChild } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';


@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent{

    // TURN possible values: 1, 2
    pokemonTurn = 1;
    pokemonPlayer1Id = Math.round(Math.random()*1025) + 1;
    pokemonPlayer2Id = Math.round(Math.random()*1025) + 1;
    lifePokemon1 = 100;
    lifePokemon2 = 100;

    //@ViewChild(PokemonComponent) pokemon1: PokemonComponent | undefined;
    //@ViewChild(PokemonComponent) pokemon2: PokemonComponent | undefined;
  
    applyDamage(damage: number) {
      if (this.pokemonTurn == 1) {
        // Apply damage to Pokemon 2
        this.lifePokemon2 -= damage;
        if(this.lifePokemon2 <= 0){
          alert('Pokemon 1 wins!');
          this.restartGame();
        }
        this.pokemonTurn = 2;
      } else {
        // Apply damage to Pokemon 1
        this.lifePokemon1 -= damage;
        if(this.lifePokemon1 <= 0){
          alert('Pokemon 2 wins!');
          this.restartGame();
        }
        this.pokemonTurn = 1;
      }
    }

    restartGame(){
      
      this.pokemonPlayer1Id = Math.round(Math.random() * 1025) + 1;
      this.pokemonPlayer2Id = Math.round(Math.random() * 1025) + 1;
      this.lifePokemon1 = 100;
      this.lifePokemon2 = 100;
      this.pokemonTurn = 1;

    }


}
