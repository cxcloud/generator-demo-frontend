import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '@cxcloud/ct-types/carts';
import { Address } from '@cxcloud/ct-types/common';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject } from 'rxjs';
import { filter, mergeMap, map, tap } from 'rxjs/operators';
import { CurrentUserService } from '../auth/current-user.service';
import { getApiUrl } from '../../utils/helpers';
import { ServiceAlias } from '../../types/services';

@Injectable()
export class CartService {
  public cart = new BehaviorSubject<Cart>(null);

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
    private currentUser: CurrentUserService
  ) {
    this.currentUser.token
      .pipe(
        filter(token => token !== null)
      )
      .subscribe(() => this.initCart());
  }

  private initCart() {
    this.http
      .get<Cart>(`${getApiUrl(ServiceAlias.Commerce)}/carts/active`)
      .subscribe(cart => this.cart.next(cart), () => this.createCart());
  }

  public createCart() {
    this.http.post<Cart>(`${getApiUrl(ServiceAlias.Commerce)}/carts`, {}).subscribe(cart => this.cart.next(cart));
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
      .post<Cart>(`${getApiUrl(ServiceAlias.Commerce)}/carts/${cart.id}/${cart.version}/lineItems`, {
        productId,
        variantId,
        quantity
      })
      .subscribe(result => this.cart.next(result));
  }

  changeQuantity(lineItemId: string, quantity: number) {
    const cart = this.cart.getValue();
    this.http
      .put<Cart>(`${getApiUrl(ServiceAlias.Commerce)}/carts/${cart.id}/${cart.version}/lineItems`, {
        lineItemId,
        quantity
      })
      .subscribe(result => this.cart.next(result));
  }

  removeLineItem(lineItemId: string) {
    const cart = this.cart.getValue();
    this.http
      .delete<Cart>(`${getApiUrl(ServiceAlias.Commerce)}/carts/${cart.id}/${cart.version}/lineItems/${lineItemId}`)
      .subscribe(result => this.cart.next(result));
  }

  setShippingAddress(address: Address) {
    const cart = this.cart.getValue();
    return this.http
      .put<Cart>(`${getApiUrl(ServiceAlias.Commerce)}/carts/${cart.id}/${cart.version}/shippingAddress`, {
        ...address
      })
      .pipe(
        map(result => result)
      );
  }

  setBillingAddress(cart: Cart, address: Address) {
    return this.http
      .put<Cart>(`${getApiUrl(ServiceAlias.Commerce)}/carts/${cart.id}/${cart.version}/billingAddress`, {
        ...address
      })
      .pipe(
        map(result => result)
      );
  }

  setShippingMethod(cart: Cart, shippingMethodId: string) {
    return this.http
      .put<Cart>(`${getApiUrl(ServiceAlias.Commerce)}/carts/${cart.id}/${cart.version}/shippingMethod`, {
        shippingMethodId: shippingMethodId
      })
      .pipe(
        map(result => result)
      );
  }

  setCartInfo(
    shippingAddress: Address,
    billingAddress: Address,
    shippingMethodId: string
  ) {
    return this.setShippingAddress(shippingAddress)
      .pipe(
        mergeMap(cart => this.setBillingAddress(cart, billingAddress)),
        mergeMap(cart => this.setShippingMethod(cart, shippingMethodId)),
        tap(result => this.cart.next(result))
      );
  }
}
