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
      showBillingAddress: false,
      shippingAddress: this.buildAddress(),
      billingAddress: this.buildAddress()
    });

    // Get available shipping methods
    this.commerceService
      .getShippingMethods()
      .subscribe(resp => (this.deliveryMethods = resp));
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
      // Send shipping address
      this.cartService.addShippingAddress(this.shippingAddress.value);
      if (
        this.addressForm.get('showBillingAddress').value &&
        this.billingAddress.valid
      ) {
        // Send billing address
        this.cartService.addBillingAddress(this.billingAddress.value);
      } else {
        // Send billing address and shipping address
        this.cartService.addBillingAddress(this.shippingAddress.value);
      }
      this.router.navigateByUrl('checkout/payment');
    }
  }
}
