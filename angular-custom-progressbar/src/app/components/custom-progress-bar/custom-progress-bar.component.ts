import {ChangeDetectionStrategy ,Component, Input } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-custom-progress-bar',
  standalone: true,
  imports: [NgbProgressbarModule , MatFormFieldModule , 
    MatInputModule , MatSelectModule , FormsModule , MatButtonModule],
  templateUrl: './custom-progress-bar.component.html',
  styleUrl: './custom-progress-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomProgressBarComponent {

  @Input() porcentaje = 0;
  color =  "primary";
  
  getProgressColor(){

    if(this.porcentaje <= 25){
      return "danger";
    }else if(this.porcentaje <= 50 && this.porcentaje > 25){
      return "warning";
    }else if(this.porcentaje <= 75 && this.porcentaje > 50){
      return "info";
    }else{
      return "success";
    }

  }
  

}
