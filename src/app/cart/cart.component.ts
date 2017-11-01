import { Component, OnInit } from '@angular/core';
import { Cart } from '../types/cart.model';
import { CART } from '../mock/carts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = CART;

  constructor() { }

  ngOnInit() {
  }

}
