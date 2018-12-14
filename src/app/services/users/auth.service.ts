import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UsersRegister {
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  email: string;
}

export interface UsersLogin {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user: UsersRegister): Observable<any> {
   return this.http.post('http://localhost:3000/auth/signup', user);
   //   .subscribe(res => {
   //  console.log(res);
   // });
  }

  logUser(user: UsersLogin): Observable<any> {
    return this.http.post('http://localhost:3000/auth/login', user);
  }
}
