import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import {
  AnonymousSignInResult,
  TokenizedSignInResult
} from '@cxcloud/ct-types/customers';
import { CurrentUserService } from './current-user.service';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
    private currentUserService: CurrentUserService
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

  public login(username: string, password: string) {
    return this.http
      .post<TokenizedSignInResult>('/auth/login', { username, password })
      .do(resp => {
        this.currentUserService.customer.next(resp.customer);
        this.currentUserService.token.next(resp.token);
        // @TODO cart service
      })
      .map(resp => resp.customer);
  }
}
