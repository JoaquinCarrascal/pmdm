import { ChangeDetectionStrategy ,Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomProgressBarComponent } from "./components/custom-progress-bar/custom-progress-bar.component";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomProgressBarComponent , MatFormFieldModule,
    MatInputModule , MatSelectModule , FormsModule , MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  
porcentaje = 0;

}
