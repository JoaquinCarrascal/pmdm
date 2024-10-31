import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css'
})
export class BattleComponent {

  turn = Math.random() > 0.5 ? 1 : 2;
  pokemonId1 = 55;
  pokemonId2 = 137;
  health1 = 100;
  health2 = 100;

  attackPokemon(damage: number) {
    
    if (this.turn === 1) {

      this.health2 -= damage;

      if(this.health2 <= 0){

        alert('Player 1 wins!');
        return this.restartBattle();
        
      }
      
      this.turn = 2;

    } else {

      this.health1 -= damage;
      
      if(this.health1 <= 0){

        alert('Player 2 wins!');
        return this.restartBattle();
        
      }
      
      this.turn = 1;

    }
  
  }

  restartBattle() {

    this.health1 = 100;
    this.health2 = 100;
    this.turn = Math.random() > 0.5 ? 1 : 2;
    
    }

}
