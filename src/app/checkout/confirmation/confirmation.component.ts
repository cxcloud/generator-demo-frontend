import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, LineItem } from '@cxcloud/ct-types/carts';
import { Address } from '@cxcloud/ct-types/common';
import { CartService } from '../../core/cart/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  cart: Cart;
  shippingAddress: Address;
  billingAddress: Address;
  columns: Array<string> = ['Description', 'Quantity', 'Price', 'Total'];
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe(cart => {
      if (cart === null) {
        return;
      }
      this.cart = cart;
      this.shippingAddress = this.cart.shippingAddress;
      this.billingAddress = this.cart.billingAddress;
    });
  }

  goToCheckout() {
    this.router.navigateByUrl('');
  }
}
