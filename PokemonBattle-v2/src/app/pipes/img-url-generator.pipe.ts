import { Pipe, PipeTransform } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Pipe({
  name: 'imgUrlGenerator'
})
export class ImgUrlGeneratorPipe implements PipeTransform {

  constructor(private pokemonServ: PokemonService) {}

  transform(name: string): string {
    //https://projectpokemon.org/images/normal-sprite/lucario.gif
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

    return `https://projectpokemon.org/images/normal-sprite/${name}.gif`;
    
  }

}
