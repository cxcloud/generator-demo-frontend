import { Component, group, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../types/common.model';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  addressForm: FormGroup;
  shippingAddress: Address;
  countryList: Array<string> = ['Finland', 'Germany', 'Russia', 'United Kingdom'];

  message: string;

  private validationMessages = {
    required: '* required',
    pattern: 'Please enter a valid email address'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: '',
      city: ['', Validators.required],
      postcode: ['', Validators.required],
      country: ['', Validators.required],
      region: '',
      phone: '',
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
      isOtherAddress: false
    });

    Object.keys(this.addressForm.controls).forEach(key => {
      const control = this.addressForm.get(key);
      control.valueChanges
      .debounceTime(1000)
      .subscribe(value => this.setValidationMessage(control, key));
    });
  }

  setValidationMessage(c: AbstractControl, name): void {
    console.log(c);
    this[`${name}Message`] = '';
    if ((c.touched || c.dirty) && c.errors) {
      this[`${name}Message`] = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
    }
  }
}
