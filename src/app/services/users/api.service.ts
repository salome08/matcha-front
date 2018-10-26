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

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
   return this.http.post('http://localhost:1234/register', user);
   //   .subscribe(res => {
   //  console.log(res);
   // });
  }
}
