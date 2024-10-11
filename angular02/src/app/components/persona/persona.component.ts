import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit {

  name = "";
  lastName = "";
  age = 0;
  lifetime: any;
  
  ngOnInit(): void{

    this.name = "Joaquín";
    this.lastName = "Carrascal";
    this.age = 22;

    if(this.age >= 18){
      this.lifetime = "adult";
    }else{
      this.lifetime = "young";
    }

  }

  birthYear() {
    
    return new Date().getFullYear() - this.age;

  }

  showInfo() {
    
    alert("No tenemos info gracias");

    }

}
