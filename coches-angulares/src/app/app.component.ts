import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarComponentComponent } from './components/car-component/car-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CarComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coches-angulares';
}
