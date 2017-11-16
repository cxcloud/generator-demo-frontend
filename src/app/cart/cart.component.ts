import { Component, OnInit } from '@angular/core';
import { Cart, LineItem } from '@cxcloud/ct-types/carts';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../core/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;
  columns: Array<string> = ['Description', 'Quantity', 'Price', 'Total'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.cart.subscribe(cart => {
      console.log(cart);
      this.cart = cart;
    });
  }

  get totalQuantity() {
    return this.cart.lineItems.reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0);
  }

  removeLineItem(item: LineItem) {
    this.cartService.removeLineItem(item.id);
  }

  goBackToHomePage() {
    this.router.navigateByUrl('/home');
  }

  updateQuantityValue(item: LineItem, quantity) {
    this.cartService.changeQuantity(item.id, quantity);
  }
}
