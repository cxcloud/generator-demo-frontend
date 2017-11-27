import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart } from '@cxcloud/ct-types/carts';
import { Address } from '@cxcloud/ct-types/common';
import { LocalStorageService } from 'ngx-webstorage';
import { CurrentUserService } from '../auth/current-user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CartService {
  public cart = new BehaviorSubject<Cart>(null);

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
    private currentUser: CurrentUserService
  ) {
    this.currentUser.token
      .filter(token => token !== null)
      .subscribe(() => this.initCart());
  }

  private initCart() {
    this.http
      .get<Cart>('/carts/active')
      .subscribe(cart => this.cart.next(cart), () => this.createCart());
  }

  private createCart() {
    this.http.post<Cart>('/carts', {}).subscribe(cart => this.cart.next(cart));
  }

  get totalCount() {
    const cart = this.cart.getValue();
    if (cart === null) {
      return 0;
    }
    return cart.lineItems.reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0);
  }

  addLineItem(productId: string, variantId?: number, quantity?: number) {
    const cart = this.cart.getValue();
    this.http
      .post<Cart>(`/carts/${cart.id}/${cart.version}/lineItems`, {
        productId,
        variantId,
        quantity
      })
      .subscribe(result => this.cart.next(result));
  }

  changeQuantity(lineItemId: string, quantity: number) {
    const cart = this.cart.getValue();
    this.http
      .put<Cart>(`/carts/${cart.id}/${cart.version}/lineItems`, {
        lineItemId,
        quantity
      })
      .subscribe(result => this.cart.next(result));
  }

  removeLineItem(lineItemId: string) {
    const cart = this.cart.getValue();
    this.http
      .delete<Cart>(`/carts/${cart.id}/${cart.version}/lineItems/${lineItemId}`)
      .subscribe(result => this.cart.next(result));
  }

  setShippingAddress(address: Address) {
    const cart = this.cart.getValue();
    return this.http
      .put<Cart>(`/carts/${cart.id}/${cart.version}/shippingAddress`, {
        address
      })
      .map(result => result);
  }

  setBillingAddress(cart: Cart, address: Address) {
    return this.http
      .put<Cart>(`/carts/${cart.id}/${cart.version}/billingAddress`, {
        address
      })
      .map(result => result);
  }

  setCartAddresses(shippingAddress: Address, billingAddress: Address) {
    this.setShippingAddress(shippingAddress)
      .flatMap(cart => this.setBillingAddress(cart, billingAddress))
      .subscribe(result => this.cart.next(result));
  }
}
