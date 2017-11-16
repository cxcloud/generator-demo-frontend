import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../../types/common.model';
import { Cart } from '../../types/cart.model';
import { CART } from '../../mock/carts';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  cart: Cart = CART;
  ngOnInit() {

  }
}
