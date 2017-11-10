import { Component, OnInit } from '@angular/core';
import { Cart } from '../types/cart.model';

import { CART } from '../mock/carts';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart: Cart = CART;

  constructor() { }

  ngOnInit() {
  }

}
