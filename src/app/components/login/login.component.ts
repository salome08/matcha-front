import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/users/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  // emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  hide = true;
  message: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.formLogin = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      'login': new FormControl(null, [
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(3)
      ]),
      'password': new FormControl(null, [
        Validators.required
      ])
    });
  }

  logUser(user): void {
    this
      .authService
      .logUser(user)
      .subscribe((res) => {
      this
        .message = res.message;
      },
        (err) => {
      this
        .message = err.error.message;
      });
  }
}
// () =>
//   this
//     .formLogin
//     .reset());
//
// console.log(this.formLogin.value);
