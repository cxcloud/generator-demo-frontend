import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: any;
  signUpForm: any;

  private validationMessages = {
    required: '* required',
    pattern: 'Please enter a valid email address',
    minlength: 'Minimum 6 characters'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
      ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
      ],
      pswd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      agreeToConditions: false
    });

    this.validate(this.signInForm);
    this.validate(this.signUpForm);
  }

  disableButton(form): boolean {
    return ((form.value && form.invalid === true) || form.invalid === true);
  }

  signIn() {
    const username = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;

    this.authService.login(username, password).subscribe(customer => {
      this.loginService.customer = customer;
      this.router.navigateByUrl('/user');
  });
  }

  signUp() {
    this.router.navigateByUrl('/user');
  }

  validate(controlGroup: FormGroup) {
    Object.keys(controlGroup.controls).forEach(key => {
      const control = controlGroup.get(key);
      control.valueChanges
        .debounceTime(1000)
        .subscribe(value => this.setValidationMessage(control, key));
    });
  }

  setValidationMessage(c: AbstractControl, name): void {
    this[`${name}Message`] = '';
    if ((c.touched || c.dirty) && c.errors) {
      this[`${name}Message`] = Object.keys(c.errors)
        .map(key => this.validationMessages[key])
        .join(' ');
    }
  }

}
