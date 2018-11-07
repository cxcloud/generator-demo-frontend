import { Component, OnInit } from '@angular/core';
import { Cart } from '@cxcloud/ct-types/carts';
import { CartService } from '../../core/cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe(cart => {
      if (cart === null) {
        return;
      }
      this.cart = cart;
    });
  }
}
