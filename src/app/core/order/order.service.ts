import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '@cxcloud/ct-types/carts';
import { Order } from '@cxcloud/ct-types/orders';
import { CartService } from '../cart/cart.service';

import 'rxjs/add/operator/mergeMap';

@Injectable()
export class OrderService {
  public order = new BehaviorSubject<Order>(null);
  constructor(private http: HttpClient, private cartService: CartService) {}

  createOrder(cart: Cart) {
    return this.http
      .post<Order>(`/orders`, {
        cartId: cart.id,
        cartVersion: cart.version
      })
      .do(order => {
        this.order.next(order);
        this.cartService.createCart();
      });
  }

  getOrder() {
    return this.order.getValue();
  }
}
