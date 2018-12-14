import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface UsersLogin {
  email: string;
  password: string;
}

export interface UsersSignup {
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient: HttpClient) {}

  public signup(user: UsersSignup): Observable<any> {
    return this.httpClient.post('http://localhost:3000/signup', user);
  }
  public login(user: UsersLogin): Observable<any> {
    return this.httpClient.post('localhost:6686/users', user);
  }


}
