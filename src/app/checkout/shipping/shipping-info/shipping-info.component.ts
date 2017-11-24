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
import { CartService } from '../../../core/cart/cart.service';

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
  // TODO: hook up delivery methods
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      showBillingAddress: false,
      shippingAddress: this.buildAddress(),
      billingAddress: this.buildAddress()
    });
  }

  get shippingAddress(): FormGroup {
    return <FormGroup>this.addressForm.get('shippingAddress');
  }

  get billingAddress(): FormGroup {
    return <FormGroup>this.addressForm.get('billingAddress');
  }

  get isFormValid(): boolean {
    return (
      (this.addressForm.get('showBillingAddress').value &&
        this.addressForm.valid === true) ||
      this.shippingAddress.valid === true
    );
  }

  buildAddress(): FormGroup {
    const pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+';

    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: '',
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: '',
      region: '',
      phone: '',
      email: ['', [Validators.required, Validators.pattern(pattern)]]
    });
  }

  checkout() {
    if (this.isFormValid === true) {
      const shippingAddress = <Address>this.shippingAddress.value;
      this.cartService.addAddress('shippingAddress', shippingAddress);

      if (
        this.addressForm.get('showBillingAddress').value &&
        this.billingAddress.valid
      ) {
        this.cartService.addAddress('billingAddress', <Address>this
          .billingAddress.value);
      } else {
        this.cartService.addAddress('billingAddress', shippingAddress);
      }
      this.router.navigateByUrl('checkout/payment');
    }
  }
}
