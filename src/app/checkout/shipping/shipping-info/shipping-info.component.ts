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
import { Customer } from '@cxcloud/ct-types/customers';
import { CartService } from '../../../core/cart/cart.service';
import { CommerceService } from '../../../core/commerce/commerce.service';
import { CurrentUserService } from '../../../core/auth/current-user.service';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-information',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.scss']
})
export class ShippingInfoComponent implements OnInit {
  addressForm: FormGroup;
  deliveryMethods: ShippingMethod[];
  customer: Customer;

  // TODO: Turn list into real from the API
  countryList: Array<any> = [
    { countryCode: 'FI', name: 'Finland' },
    { countryCode: 'DE', name: 'Germany' },
    { countryCode: 'RU', name: 'Russia' },
    { countryCode: 'UK', name: 'United Kingdom' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cartService: CartService,
    private commerceService: CommerceService,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {
    // Get available shipping methods
    this.commerceService
      .getShippingMethods()
      .subscribe(resp => (this.deliveryMethods = resp));

    this.currentUserService.customer.subscribe(
      customer => (this.customer = customer)
    );

    this.addressForm = this.formBuilder.group({
      showBillingAddressForm: false,
      shippingAddressForm: this.buildAddress(this.defautShippingAddress),
      billingAddressForm: this.buildAddress(this.defautBillingAddress),
      deliveryMethodsForm: this.formBuilder.group({
        deliveryMethod: {}
      })
    });
  }

  get defautShippingAddress(): Address {
    return this.customer.addresses.filter(
      address => address.id === this.customer.defaultShippingAddressId
    )[0];
  }

  get defautBillingAddress(): Address {
    return this.customer.addresses.filter(
      address => address.id === this.customer.defaultBillingAddressId
    )[0];
  }

  get shippingAddressForm(): FormGroup {
    return <FormGroup>this.addressForm.get('shippingAddressForm');
  }

  get billingAddressForm(): FormGroup {
    return <FormGroup>this.addressForm.get('billingAddressForm');
  }

  get deliveryMethodsForm(): FormGroup {
    return <FormGroup>this.addressForm.get('deliveryMethodsForm');
  }

  get isFormValid(): boolean {
    const deliveryMethod = this.deliveryMethodsForm.get('deliveryMethod');
    const isDeliveryMethodValid =
      deliveryMethod.valid && (deliveryMethod.dirty || deliveryMethod.touched);
    return (
      (this.shippingAddressForm.valid && isDeliveryMethodValid) ||
      (this.addressForm.get('showBillingAddressForm').value &&
        this.addressForm.valid &&
        isDeliveryMethodValid)
    );
  }

  buildAddress(address): FormGroup {
    const pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+';
    return this.formBuilder.group({
      firstName: [address.firstName || '', Validators.required],
      lastName: [address.lastName || '', Validators.required],
      streetName: [address.streetName || '', Validators.required],
      additionalAddressInfo: address.additionalAddressInfo || '',
      city: [address.city || '', Validators.required],
      postalCode: [address.postalCode || '', Validators.required],
      country: [address.country || 'DE', Validators.required],
      region: address.region || '',
      phone: address.phone || '',
      email: [
        address.email || '',
        [Validators.required, Validators.pattern(pattern)]
      ]
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
      this.cartService
        .setCartInfo(
          this.shippingAddress,
          this.billingAddress,
          this.deliveryMethodsForm.get('deliveryMethod').value.id
        )
        .subscribe(cart => {
          if (cart) {
            this.router.navigateByUrl('checkout/payment');
          }
        });
    }
  }
}
