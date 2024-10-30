import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

titulo: string = 'Bienvenido a la página de inicio';

dinero : number = 100.05;
fecha : string = '2021-04-24';
porcentaje : number = 0.8;

}
