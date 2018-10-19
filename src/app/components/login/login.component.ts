import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formSignUp: FormGroup;
  hide = false;
  message = '';
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.formSignUp = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      'email': new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      'password': new FormControl(null, [
        Validators.minLength(8),
        Validators.maxLength(55),
        Validators.required
      ])
    });
  }

  submit(): void {
    if (this.formSignUp.invalid) return;

    this.usersService.signup(this.formSignUp.value).subscribe((res) => {
      this.message = 'Ok from other';
    }, (err) => {
      this.message = 'Une erreur est survenue';
    }, () => this.formSignUp.reset());

    console.log(this.formSignUp.value);
  }
}
