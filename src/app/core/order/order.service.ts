import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '@cxcloud/ct-types/carts';
import { Order } from '@cxcloud/ct-types/orders';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartService } from '../cart/cart.service';
import { getApiUrl, COMMERCE } from '../../utils/helpers';

@Injectable()
export class OrderService {
  public order = new BehaviorSubject<Order>(null);
  constructor(private http: HttpClient, private cartService: CartService) {}

  createOrder(cart: Cart) {
    return this.http
      .post<Order>(`${getApiUrl(COMMERCE)}/orders`, {
        cartId: cart.id,
        cartVersion: cart.version
      })
      .pipe(
        tap(order => {
          this.order.next(order);
          this.cartService.createCart();
        })
      );
  }

  getOrder() {
    return this.order.getValue();
  }
}
