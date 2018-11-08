import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '@cxcloud/ct-types/carts';
import { Order } from '@cxcloud/ct-types/orders';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartService } from '../cart/cart.service';
import { getApiUrl } from '../../utils/helpers';
import { ServiceAlias } from '../../types/services';

@Injectable()
export class OrderService {
  readonly apiUrl = getApiUrl(ServiceAlias.Commerce);
  public order = new BehaviorSubject<Order>(null);

  constructor(private http: HttpClient, private cartService: CartService) {}

  createOrder(cart: Cart) {
    return this.http
      .post<Order>(`${this.apiUrl}/orders`, {
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
