import { Component } from '@angular/core';
import { PersonaDTO } from '../../models/Persona.dto';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrl: './persona-form.component.css'
})
export class PersonaFormComponent {

  formaConocerPag = ['Google', 'Amigo', 'Profesor'];

  persona = new PersonaDTO('', '', '', '', '', '', '', '');

  enviado = false;

  constructor() { }

  onSubmit() {
    this.enviado = true;
  }

}
