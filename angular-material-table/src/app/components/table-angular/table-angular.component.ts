import { Component } from '@angular/core';

export interface Alumno {
  alumnoId: number;
  nombre: string;
  apellidos: string;
  nif: number;
  edad: number;
  curso: string;
}

const ALUMNOS: Alumno[] = [
{alumnoId: 1, nombre: 'Juan', apellidos: 'Perez', nif: 12345678, edad: 20, curso: 'Angular'},
{alumnoId: 2, nombre: 'Maria', apellidos: 'Lopez', nif: 87654321, edad: 21, curso: 'React'},
{alumnoId: 3, nombre: 'Pedro', apellidos: 'Garcia', nif: 12348765, edad: 22, curso: 'Vue'},
{alumnoId: 4, nombre: 'Ana', apellidos: 'Martinez', nif: 56781234, edad: 23, curso: 'Angular'},
{alumnoId: 5, nombre: 'Luis', apellidos: 'Sanchez', nif: 43218765, edad: 24, curso: 'React'},
{alumnoId: 6, nombre: 'Sara', apellidos: 'Gomez', nif: 87654321, edad: 25, curso: 'Vue'},
{alumnoId: 7, nombre: 'Marcos', apellidos: 'Gonzalez', nif: 12345678, edad: 26, curso: 'Angular'},
{alumnoId: 8, nombre: 'Carmen', apellidos: 'Rodriguez', nif: 56781234, edad: 27, curso: 'React'},
];

@Component({
  selector: 'app-table-angular',
  templateUrl: './table-angular.component.html',
  styleUrl: './table-angular.component.css'
})

export class TableAngularComponent {

  columnas: string[] = ['alumnoId', 'nombre', 'apellidos', 'nif', 'edad', 'curso'];
  listadoAlumnos = ALUMNOS;

  update(data: string, position: number) {
      
    if(this.columnas.includes(data)){

      let index = this.columnas.indexOf(data);
      this.columnas.splice(index, 1);

    }else{

      this.columnas.splice(position , 0 , data);

    }

    console.log(this.columnas);
    
    }

}
