import { Component, inject } from '@angular/core';
import { SwapiCar } from '../../interfaces/swapi-car';
import { SwapiCarServiceService } from '../../services/swapi-car-service.service';

@Component({
  selector: 'app-swapi-car-card-list',
  templateUrl: './swapi-car-card-list.component.html',
  styleUrl: './swapi-car-card-list.component.css'
})
export class SwapiCarCardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    

  }

}
