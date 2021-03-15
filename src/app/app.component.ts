import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //endpoints
  RegistrationUrlEndpoint = "http://localhost:3000/users/user";
  FrontendUrlEndpoint = "http://localhost:4200/";

  //registration logic
  title = 'IdentitiesApp';
  passwordType = "password";
  passwordStatus = "Show"

  //form group
  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private http: HttpClient) {
  }


  onSubmit() : void {
    console.warn(this.registrationForm.value);

    let registeredUser = new User(this.registrationForm.get('username').value,
    this.registrationForm.get('password').value,
    this.registrationForm.get('rePassword').value,
    this.registrationForm.get('email').value);

    console.log(registeredUser);

    //this.http.post(this.RegistrationUrlEndpoint, )
  }

  togglePasswordVisibility() : void{
    if(this.passwordType === "password") {
      this.passwordType = "text";
      this.passwordStatus = "Hide";
      console.log(this.passwordStatus);
    }
    else {
      this.passwordType = "password";
      this.passwordStatus = "Show";
      console.log(this.passwordStatus);
    }
  }
}
