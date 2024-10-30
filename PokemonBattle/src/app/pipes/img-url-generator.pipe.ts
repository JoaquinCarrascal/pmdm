import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrlGenerator'
})
export class ImgUrlGeneratorPipe implements PipeTransform {

  transform(id:number): string {

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  }

}
