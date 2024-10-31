import { Component} from '@angular/core';
import { PersonaDTO } from '../../models/Persona.dto';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrl: './persona-form.component.css'
})
export class PersonaFormComponent{

  formaConocerPag = ['Google', 'Amigo', 'Profesor'];

  sexoList = ['Hombre', 'Mujer', 'Otro'];

  persona = new PersonaDTO('', '', 0, '', '', '', '', '');

  enviado = false;

  checked = false;

  letraDni = '';

  constructor() { }
  

  onSubmit() {
    
    this.enviado = true;
    console.log(this.persona);
  }

  checkForm() {



  }

  checkDni() {
    
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letra = letras.charAt(this.persona.nif % 23);
    this.letraDni = letra;

    }

}
