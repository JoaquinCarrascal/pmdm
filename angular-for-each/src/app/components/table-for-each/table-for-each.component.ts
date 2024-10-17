import { Component } from '@angular/core';

export interface ContryPhone {

  name: string;
  flag: string;
  prefix: number[];

}

const COUNTRIES_PREFIXES: ContryPhone[] = [
  {name: 'España', flag: 'es', prefix: [34]},
  {name: 'Francia', flag: 'fr', prefix: [33]},
  {name: 'Italia', flag: 'it', prefix: [39]},
  {name: 'Portugal', flag: 'pt', prefix: [351]},
  {name: 'Alemania', flag: 'de', prefix: [49]},
  {name: 'Reino Unido', flag: 'gb', prefix: [44]},
  {name: 'Estados Unidos', flag: 'us', prefix: [1]},
  {name: 'Japón', flag: 'jp', prefix: [81]},
  {name: 'China', flag: 'cn', prefix: [86]},
  {name: 'Republica dominicana', flag: 'do', prefix: [1809, 829, 849]},
  
];

@Component({
  selector: 'app-table-for-each',
  templateUrl: './table-for-each.component.html',
  styleUrl: './table-for-each.component.css'
})
export class TableForEachComponent {

  countryList = COUNTRIES_PREFIXES;

  flagCode(data: string){

   return `fi fi-${data} fis`;

  }

}
