import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { CustomerSignupDraft } from '@cxcloud/ct-types/customers';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    const pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+';

    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(pattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(pattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signIn() {
    if (this.signInForm.valid) {
      const username = this.signInForm.get('email').value;
      const password = this.signInForm.get('password').value;
      this.authService.login(username, password).subscribe(resp => {
        if (resp) {
          this.router.navigateByUrl('/user');
        }
      });
    }
  }

  signUp() {
    if (this.signUpForm.valid) {
      const newCustomer = Object.keys(this.signUpForm.controls).reduce((acc, key) => {
        acc[key] = this.signUpForm.controls[key].value;
        return acc;
      }, {} as CustomerSignupDraft);

      this.authService.register(newCustomer).subscribe(resp => {
        if (resp) {
         this.router.navigateByUrl('/user');
        }
      });
    }
  }
}
