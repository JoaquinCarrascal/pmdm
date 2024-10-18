import { Component , ChangeDetectionStrategy, NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule , FormsModule , MatButton],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

email: string = "";
password: string = "";

login() {
  console.log(this.email , this.password);
  }

}
