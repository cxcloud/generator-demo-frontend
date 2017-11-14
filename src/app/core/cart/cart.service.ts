import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '@cxcloud/ct-types/carts';
import { LocalStorageService } from 'ngx-webstorage';
import { CurrentUserService } from '../auth/current-user.service';
import 'rxjs/add/operator/take';

@Injectable()
export class CartService {
  public cart = new BehaviorSubject<Cart>(null);

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
    private currentUser: CurrentUserService
  ) {
    this.http.get<Cart>('/carts/active').subscribe(
      cart => this.cart.next(cart),
      () => {
        // if we have a token already,
        // create the cart immediately
        if (this.currentUser.token.getValue() !== null) {
          return this.createCart();
        }
        // otherwise wait until we have a token
        this.currentUser.token.take(1).subscribe(() => this.createCart());
      }
    );
  }

  private createCart() {
    this.http.post<Cart>('/carts', {}).subscribe(cart => this.cart.next(cart));
  }
}
