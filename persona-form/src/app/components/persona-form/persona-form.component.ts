import { Component, ViewChild} from '@angular/core';
import { PersonaDTO } from '../../models/Persona.dto';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrl: './persona-form.component.css'
})
export class PersonaFormComponent{

  formaConocerPag = ['Google', 'Amigo', 'Profesor'];

  sexoList = ['Hombre', 'Mujer', 'Otro'];

  persona = new PersonaDTO('', '', 0, '', '', '', '', '');

  contrasenaRep = '';

  enviado = false;

  checked = false;

  letraDni = '';

  constructor() { }
  

  onSubmit() {
    
    if(this.checkForm()){

      this.enviado = true;
      console.log(this.persona);
      
    }

  }
  
  checkForm(): boolean {

    return this.persona.contrasena === this.contrasenaRep ? true : false;

  }

  checkDni() {
    
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letra = letras.charAt(this.persona.nif % 23);
    this.letraDni = letra;

    }

}
