import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  hide = true;
  message = '';
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.formLogin = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      'email': new FormControl(null, Validators.compose([
        Validators.pattern(this.emailRegex)
      ])),
      'password': new FormControl(null, [
        Validators.maxLength(15),
      ])
    });
  }

  submit(): void {
    if (this.formLogin.invalid) { return; }

    this.usersService.login(this.formLogin.value).subscribe((res) => {
      this.message = 'Ok from other';
    }, (err) => {
      this.message = 'Une erreur est survenue';
    }, () => this.formLogin.reset());

    console.log(this.formLogin.value);
  }
}
