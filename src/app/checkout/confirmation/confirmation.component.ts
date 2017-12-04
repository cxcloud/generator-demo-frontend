import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, LineItem } from '@cxcloud/ct-types/carts';
import { Address } from '@cxcloud/ct-types/common';
import { CartService } from '../../core/cart/cart.service';
import { OrderService } from '../../core/order/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  cart: Cart;
  shippingAddress: Address;
  billingAddress: Address;

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

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

  completeCheckout() {
    this.orderService.createOrder(this.cart).subscribe(order => {
      if (order) {
        this.router.navigateByUrl('/order');
      }
    });
  }
}
