import { Component, OnInit } from '@angular/core';
import { CharList, CharResponse } from '../../interfaces/swapi-char';
import { SwapiCharServiceService } from '../../services/swapi-char-service.service';

@Component({
  selector: 'app-swapi-peoplelist',
  templateUrl: './swapi-peoplelist.component.html',
  styleUrl: './swapi-peoplelist.component.css'
})
export class SwapiPeoplelistComponent implements OnInit {

  charList: CharList [] = [];

  constructor(private charService: SwapiCharServiceService) { }

  ngOnInit(): void {

    this.charService.getCharList().subscribe((x: CharResponse) => {

      this.charList = x.results;

    });

  }

  createImageUrl(urlChar: string): string{

    const id = urlChar.split('/').filter(segment => segment).pop();
    
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  }

}
