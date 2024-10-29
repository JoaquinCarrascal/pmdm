import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonResponse } from '../../model/ipokemon.interface';
import { PokemonService } from '../../services/pokemon.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent{
  
  @Input() pokemon: [PokemonResponse , number] | undefined;
  @Output() sendAttackEmitter = new EventEmitter<number[]>();

  id: number | undefined;
  pokemonHealth: number = 100;

  options: AnimationOptions = {
    path: 'Animation - 1730203042898.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor(private pokemonService: PokemonService) { }

  initPokemon(idImg: number): string{

    if(idImg){

      if(this.pokemon !== undefined){
        this.id = this.pokemon[0].id;
        this.pokemonHealth = this.pokemon[1];
        return this.pokemonService.createImgUrl(idImg);
      }
      else{
        return '';
      }
    }
    else
      return '';

    }

  sendAttack() {

    if (this.id !== undefined) {

      this.sendAttackEmitter.emit([Math.round(Math.random() * 25) + 1, this.id]);

    }

  }

  getProgressColor(){

    if(this.pokemonHealth <= 25){
      return "danger";
    }else if(this.pokemonHealth <= 70 && this.pokemonHealth > 25){
      return "warning";
    }else{
      return "success";
    }

  }

}