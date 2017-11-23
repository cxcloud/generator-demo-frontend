import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import {
  AnonymousSignInResult,
  TokenizedSignInResult,
  CustomerSignupDraft
} from '@cxcloud/ct-types/customers';
import { CartService } from '../cart/cart.service';
import { CurrentUserService } from './current-user.service';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
    private currentUserService: CurrentUserService,
    private cartService: CartService
  ) {
    const token = this.storage.retrieve('token');
    if (!token) {
      this.loginAnonymously();
    }
  }

  private loginAnonymously() {
    this.http
      .post<AnonymousSignInResult>('/auth/login/anonymous', {})
      .subscribe(result => {
        this.currentUserService.token.next(result.token);
      });
  }

  private handleSignIn(resp: TokenizedSignInResult) {
    this.currentUserService.customer.next(resp.customer);
    this.currentUserService.token.next(resp.token);
    this.cartService.cart.next(resp.cart);
  }

  public login(username: string, password: string) {
    return this.http
      .post<TokenizedSignInResult>('/auth/login', { username, password })
      .do(resp => this.handleSignIn(resp))
      .map(resp => resp.customer);
  }

  public register(draft: CustomerSignupDraft) {
    return this.http
      .post<TokenizedSignInResult>('/auth/register', draft)
      .do(resp => this.handleSignIn(resp))
      .map(resp => resp.customer);
  }

  public logout() {
    this.currentUserService.customer.next(null);
    this.currentUserService.token.next(null);
    this.cartService.cart.next(null);
  }
}
