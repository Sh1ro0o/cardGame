import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  //endpoints
  public RegistrationUrlEndpoint = "/api/users/user";
  public FrontendUrlEndpoint = "http://localhost:4200/";

  constructor(private http: HttpClient) {
    //nothing
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.RegistrationUrlEndpoint, user);
  }
}
