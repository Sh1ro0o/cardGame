import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IdentitiesApp';
  ApiUrlEndpoint = "http://localhost:3000/users/user";
  FrontendUrlEndpoint = "http://localhost:4200/";
  passwordType = "password";
  passwordStatus = "Show"

  constructor(private http: HttpClient) {
  }

  togglePasswordVisibility() {
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
