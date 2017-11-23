import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
    private cartService: CartService,
    private router: Router
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
        this.currentUserService.customer.next(null);
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
    this.loginAnonymously();
    this.router.navigateByUrl('/user/login');
  }
}
