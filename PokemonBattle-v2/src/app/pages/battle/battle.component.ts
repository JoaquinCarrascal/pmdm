import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css'
})
export class BattleComponent {

  turn = Math.random() > 0.5 ? 1 : 2;
  pokemonId1 = 55;
  health1 = 100;
  health2 = 100;

}
