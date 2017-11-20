import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: any;
  signUpForm: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
      ],
      password: ['', Validators.required]
    });

    this.signUpForm = this.fb.group({
      title: '',
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
      ],
      password: ['', Validators.required],
      comfirmPassword: ['', Validators.required],
      agreeToConditions: false
    });
  }

  signIn() {
    console.log('sign in');
  }

}
