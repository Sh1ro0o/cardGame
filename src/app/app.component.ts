import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './interface/user';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //endpoints
  RegistrationUrlEndpoint = "/api/users/user";
  FrontendUrlEndpoint = "http://localhost:4200/";

  //registration logic
  title = 'IdentitiesApp';
  passwordType = "password";
  passwordStatus = "Show"

  //form group
  //TO-DO: validatorji (create validator that compares password with repassword, create validator that checks email structure)
  //TO-DO: api call to check if email is valid
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(8), Validators.max(48)]),
    rePassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient) {
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.RegistrationUrlEndpoint, user);
  }

  onSubmit() : void {
    console.warn(this.registrationForm.value);

    let registeredUser = new User(this.registrationForm.get('username').value,
    this.registrationForm.get('password').value,
    this.registrationForm.get('rePassword').value,
    this.registrationForm.get('email').value);

    //console logs created class User
    console.log(registeredUser);

    //sends with post
    this.addUser(registeredUser).subscribe((user) => {
      console.log(user);
    })
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
