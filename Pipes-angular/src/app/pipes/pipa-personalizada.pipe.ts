import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipaPersonalizada'
})
export class PipaPersonalizadaPipe implements PipeTransform {

  transform(value: string | number): string {
    return `${value}€`;
  }

}
