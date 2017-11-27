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
import { ShippingMethod } from '@cxcloud/ct-types/shipping';
import { CartService } from '../../../core/cart/cart.service';
import { CommerceService } from '../../../core/commerce/commerce.service';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-information',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.scss']
})
export class ShippingInfoComponent implements OnInit {
  addressForm: FormGroup;
  deliveryMethods: ShippingMethod[];
  countryList: Array<string> = [
    'Finland',
    'Germany',
    'Russia',
    'United Kingdom'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cartService: CartService,
    private commerceService: CommerceService
  ) {}

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      showBillingAddressForm: false,
      shippingAddressForm: this.buildAddress(),
      billingAddressForm: this.buildAddress()
    });

    // Get available shipping methods
    this.commerceService
      .getShippingMethods()
      .subscribe(resp => (this.deliveryMethods = resp));
  }

  get shippingAddressForm(): FormGroup {
    return <FormGroup>this.addressForm.get('shippingAddressForm');
  }

  get billingAddressForm(): FormGroup {
    return <FormGroup>this.addressForm.get('billingAddressForm');
  }

  get isFormValid(): boolean {
    return (
      (this.addressForm.get('showBillingAddressForm').value &&
        this.addressForm.valid === true) ||
      this.shippingAddressForm.valid === true
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

  get billingAddress(): Address {
    return this.addressForm.get('showBillingAddressForm').value &&
      this.billingAddressForm.valid
      ? this.billingAddressForm.value
      : this.shippingAddressForm.value;
  }

  get shippingAddress(): Address {
    return this.shippingAddressForm.value;
  }

  checkout() {
    if (this.isFormValid === true) {
      this.cartService.setCartAddresses(
        this.shippingAddress,
        this.billingAddress
      );
      this.router.navigateByUrl('checkout/payment');
    }
  }
}
