import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '@cxcloud/ct-types/carts';
import { Order } from '@cxcloud/ct-types/orders';

import 'rxjs/add/operator/mergeMap';

@Injectable()
export class OrderService {
  public order = new BehaviorSubject<Order>(null);
  constructor(private http: HttpClient) {}

  createOrder(cart: Cart) {
    this.http
      .post<Order>(`/orders`, {
        cartId: cart.id,
        cartVersion: cart.version
      })
      .subscribe(order => this.order.next(order));
  }

  getOrder() {
    const order = this.order.getValue();
    this.http
      .get<Order>(`/orders/${order.id}`)
      .subscribe(result => this.order.next(result));
  }
}
