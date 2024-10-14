import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-component',
  standalone: true,
  imports: [],
  templateUrl: './car-component.component.html',
  styleUrl: './car-component.component.css'
})
export class CarComponentComponent implements OnInit{

imgRoute = "";
nombreCoche = "";
precioHora = 0;

ngOnInit(): void {
 
  this.imgRoute = "coche_1.png";
  this.nombreCoche = "Tesla model 7";
  this.precioHora = 23;

}

}
