import { Component } from '@angular/core';

export interface ContryPhone {

  name: string;
  flag: string;
  prefix: number[];

}

const COUNTRIES_PREFIXES: ContryPhone[] = [
  {name: 'España', flag: 'spain/spain_640.png', prefix: [34]},
  {name: 'Francia', flag: 'france/france_640.png', prefix: [33]},
  {name: 'Italia', flag: 'italy/italy_640.png', prefix: [39]},
  {name: 'Portugal', flag: 'portugal/portugal_640.png', prefix: [351]},
  {name: 'Alemania', flag: 'germany/germany_640.png', prefix: [49]},
  
];

@Component({
  selector: 'app-table-for-each',
  templateUrl: './table-for-each.component.html',
  styleUrl: './table-for-each.component.css'
})
export class TableForEachComponent {

  countryList = COUNTRIES_PREFIXES;

}
