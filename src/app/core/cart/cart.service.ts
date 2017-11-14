import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '@cxcloud/ct-types/carts';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class CartService {
  public cart = new BehaviorSubject<Cart>(null);

  constructor(private http: HttpClient, private storage: LocalStorageService) {
    this.http.get<Cart>('/carts/active').subscribe(
      cart => this.cart.next(cart),
      () => {
        this.createCart();
      }
    );
  }

  private createCart() {
    this.http.post<Cart>('/carts', {}).subscribe(cart => this.cart.next(cart));
  }
}
