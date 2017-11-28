import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '@cxcloud/ct-types/carts';

@Injectable()
export class OrderService {
  public order = new BehaviorSubject<Cart>(null);
  constructor(private http: HttpClient) {}

  convertCartToOrder(cart: Cart) {
    this.http
      .post<Cart>(`/orders`, {
        cartId: cart.id,
        cartVersion: cart.version
      })
      .subscribe(order => this.order.next(order));
  }
}
