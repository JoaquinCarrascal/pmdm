import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

//Property binding

valoracion = 5;
imgUrl = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

//Event binding

showUserInfo() {

  alert('User name: ' + this.name + `User name ${this.name}`);
  

}

//bidireccional

name = 'Miguel';

}
