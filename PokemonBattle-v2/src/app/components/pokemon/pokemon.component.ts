import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/ipokemon';
import { ImgUrlGeneratorPipe } from '../../pipes/img-url-generator.pipe';
import { PokemonRandomizerPipe } from '../../pipes/pokemon-randomizer.pipe';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  @Input() pokemonId: number | undefined;
  @Input() health: number = 100;
  @Input() isMyTurn: boolean = false;
  @Output() attack = new EventEmitter<number>();
  pokemon: PokemonResponse | undefined;
  urlImg: string | undefined;

  constructor(private pokemonServ: PokemonService, 
            private urlImgGen: ImgUrlGeneratorPipe,
            private pokemonRnd: PokemonRandomizerPipe) { }

  ngOnInit(): void {

    this.pokemonServ
      .getPokemon(this.pokemonId!)
      .subscribe((data) => {
        
        this.pokemon = data;
        this.urlImg = this.urlImgGen.transform(data.name);
        
      });

  }

  getProgressColor(){

    if(this.health <= 25){
      return "danger";
    }else if(this.health <= 70 && this.health > 25){
      return "warning";
    }else{
      return "success";
    }

  }

  attackPokemon(){
    this.attack.emit(Math.floor(Math.random() * 25) + 5);
  }

  swapPokemon() {
    
    this.pokemonServ
      .getPokemon(this.pokemonRnd.transform())
      .subscribe((data) => {
        
        this.pokemon = data;
        this.urlImg = this.urlImgGen.transform(data.name);
        
      }
    );

  }

}
