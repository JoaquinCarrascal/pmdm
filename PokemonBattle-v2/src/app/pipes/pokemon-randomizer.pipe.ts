import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonRandomizer'
})
export class PokemonRandomizerPipe implements PipeTransform {

  transform(): number {
    return Math.floor(Math.random() * 900) + 1;
  }

}
