import { Component, OnInit } from '@angular/core';
// import { UsersService } from '../../services/users/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/users/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignup: FormGroup;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
  hide = true;
  message: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.formSignup = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      'firstname': new FormControl(null, [
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(3)
      ]),
      'lastname': new FormControl(null, [
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(3)
      ]),
      'login': new FormControl(null, [
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(3)
      ]),
      'password': new FormControl(null, Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern(this.passwordRegex)
      ])),
      'email': new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]))
    });
  }

  // onSubmit(): void {
  registerUser(user): void {
    this
      .authService
      .registerUser(user)
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
