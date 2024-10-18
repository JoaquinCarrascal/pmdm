import { Component, OnInit } from '@angular/core';
import { House } from '../../interfaces/house.interfaces';
import { HouseServiceService } from '../../services/house-service.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css'
})
export class HouseListComponent implements OnInit {

  houseList : House[] = [];

  constructor(private houseService: HouseServiceService) { }

  
  ngOnInit(): void {

    this.houseService.getHouseList().subscribe(repuesta =>{

      this.houseList = repuesta;

    });
    
  }

}
