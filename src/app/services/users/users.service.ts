import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';


export interface UsersSignup {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}

  public signup(user: UsersSignup): Observable<any> {
    return this.httpClient.post('localhost:6686/users', user);
  }
}
