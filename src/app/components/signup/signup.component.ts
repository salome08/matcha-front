import { Component, OnInit } from '@angular/core';
// import { UsersService } from '../../services/users/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../../services/users/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignup: FormGroup;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  hide = true;
  message: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.formSignup = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      'firstname': new FormControl(null, [
        Validators.maxLength(13),
        Validators.minLength(3)
      ]),
      'lastname': new FormControl(null, [
        Validators.maxLength(13),
        Validators.minLength(3)
      ]),
      'login': new FormControl(null, [
        Validators.maxLength(13),
        Validators.minLength(3)
      ]),
      'password': new FormControl(null, Validators.compose([
        Validators.maxLength(15),
        Validators.pattern(this.passwordRegex)
      ])),
      'email': new FormControl(null, Validators.compose([
        Validators.pattern(this.emailRegex)
      ]))
    });
  }

  // onSubmit(): void {
    registerUser(user) {
    this.apiService.registerUser(user);
  }

  // onSubmit(): void {
  //   if (this.formSignup.invalid) { return; }
  //
  //   this.apiService.registerUser(this.formSignup.value).subscribe((res) => {
  //   this.message = 'You\'re gonna received a confirmation mail'; },
  //     (err) => { this.message = 'An error has occured'; }
  //   );
  //
  //   console.log(this.formSignup.value);
  // }
}
