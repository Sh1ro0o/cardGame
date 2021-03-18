import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './interface/user';
import { Observable, throwError } from 'rxjs';
import { RegistrationService } from './registration.service';
import { passwordContainsLowerCaseValidator } from './shared/validators/password-contains-lowercase';
import { passwordRepeatMatchValidator } from './shared/validators/password-repeat.validator';
import { passwordContainsUpperCaseValidator } from './shared/validators/password-contains-uppercase';
import { passwordContainsNumberValidator } from './shared/validators/password-contains-number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //registration logic
  title = 'IdentitiesApp';
  passwordType = "password";
  passwordStatus = "Show"

  //error logic
  public displayPasswordTasks = false;
  public displayUsernameRequired = false;
  public displayPasswordRequired = false;
  public displayEmailRequired = false;

  //form
  registrationForm : FormGroup;

  //form group
  //TO-DO: validatorji (create validator that compares password with repassword, create validator that checks email structure)
  //TO-DO: api call to check if email is valid

  constructor(
    private fb : FormBuilder,
    private _registrationService : RegistrationService) {
  }


  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(48),
                      passwordContainsUpperCaseValidator, passwordContainsLowerCaseValidator, passwordContainsNumberValidator]],
      rePassword: ['', [Validators.required]],
      email: ['', [Validators.required]],
    },
    { validator: [passwordRepeatMatchValidator]}
    )
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
    this._registrationService.addUser(registeredUser).subscribe((user) => {
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

  onPasswordChange(textValue: string): void {
    if (textValue.length >= 1) {
      this.displayPasswordTasks = true;
    } else {
      this.displayPasswordTasks = false;
    }
  }
}
