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
    return this.http
      .post<Order>(`/orders`, {
        cartId: cart.id,
        cartVersion: cart.version
      })
      .map(order => order);
  }

  getOrder(order: Order) {
    return this.http.get<Order>(`/orders/${order.id}`).map(res => res);
  }

  initOrder(cart: Cart) {
    this.createOrder(cart)
      .flatMap(order => this.getOrder(order))
      .subscribe(result => this.order.next(result));
  }
}
