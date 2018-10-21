import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(user) {
   this.http.post('http://localhost:1234/register', user).subscribe(res => {
    console.log(res);
   });
  }
}
