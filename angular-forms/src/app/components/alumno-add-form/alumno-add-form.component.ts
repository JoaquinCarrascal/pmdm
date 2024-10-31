import { Component } from '@angular/core';
import { AlumnoDto } from '../../models/alumno.dto';

@Component({
  selector: 'app-alumno-add-form',
  templateUrl: './alumno-add-form.component.html',
  styleUrl: './alumno-add-form.component.css'
})
export class AlumnoAddFormComponent {

  listadoDeCursos = ['Angular', 'React', 'Vue'];

  alumno = new AlumnoDto('Angular', 'Joaquín', 22, '622195867');

}
