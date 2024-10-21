import { Component, OnInit} from '@angular/core';
import { RespuestaSwapi, SwapiCar } from '../../interfaces/swapi-car';
import { SwapiCarServiceService } from '../../services/swapi-car-service.service';

@Component({
  selector: 'app-swapi-car-card-list',
  templateUrl: './swapi-car-card-list.component.html',
  styleUrl: './swapi-car-card-list.component.css'
})
export class SwapiCarCardListComponent implements OnInit {

  carList: SwapiCar[] = [];

  pages = 5;

  constructor(private swapiCarService: SwapiCarServiceService) { }

  ngOnInit(): void {
    
    for (let i = 1; i < this.pages; i++) {
      
      this.swapiCarService.getCarList(`page=${i}`).subscribe((x: RespuestaSwapi) => {

        this.carList.push(...x.results);

      });
    }

  }

  createImageUrl(urlCoche: string): string{

    const id = urlCoche.split('/').filter(segment => segment).pop();
    
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;

  }

}
