import { Component } from '@angular/core';
import { AlumnoDto } from '../../models/alumno.dto';

@Component({
  selector: 'app-alumno-add-form',
  templateUrl: './alumno-add-form.component.html',
  styleUrl: './alumno-add-form.component.css'
})
export class AlumnoAddFormComponent {

  listadoDeCursos = ['Angular', 'React', 'Vue'];
  submitted = false;
  alumno = new AlumnoDto(this.listadoDeCursos[0], 'Joaquín', 22, '622195867');

  addStudent() {
    this.submitted = true;
    }



}
