import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';
import { Address } from '@cxcloud/ct-types/common';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-information',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.scss']
})
export class ShippingInfoComponent implements OnInit {
  addressForm: FormGroup;
  countryList: Array<string> = [
    'Finland',
    'Germany',
    'Russia',
    'United Kingdom'
  ];
  deliveryMethods: Array<any> = [
    {
      name: 'Standard',
      description: 'Delivery in 4-5 days',
      price: {
        currency: 'EUR',
        amount: '0'
      }
    },
    {
      name: 'Store Pickup',
      description: '',
      price: {
        currency: 'EUR',
        amount: '0'
      }
    }
  ];

  message: string;

  private validationMessages = {
    required: '* required',
    pattern: 'Please enter a valid email address'
  };

  get shippingAddress(): FormGroup {
    return <FormGroup>this.addressForm.get('shippingAddress');
  }

  get billingAddress(): FormGroup {
    return <FormGroup>this.addressForm.get('billingAddress');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      showBillingAddress: false,
      shippingAddress: this.buildAddress(),
      billingAddress: this.buildAddress()
    });

    this.runValidation(this.shippingAddress);
    this.runValidation(this.billingAddress);
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: '',
      city: ['', Validators.required],
      postcode: ['', Validators.required],
      country: '',
      region: '',
      phone: '',
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
      ]
    });
  }

  runValidation(controlGroup: FormGroup) {
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

  disableButton(): boolean {
    return (
      (this.addressForm.get('showBillingAddress').value &&
        this.addressForm.invalid === true) ||
      this.shippingAddress.invalid === true
    );
  }

  checkout() {
    if (this.disableButton() === false) {
      this.router.navigateByUrl('checkout/payment');
    }
  }
}
