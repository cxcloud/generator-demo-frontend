import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { OAuthToken, Customer } from '@cxcloud/ct-types/customers';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';

interface UserData {
  token: OAuthToken;
  customer: Customer;
}

@Injectable()
export class CurrentUserService {
  public token = new BehaviorSubject<OAuthToken>(null);
  public customer = new BehaviorSubject<Customer>(null);

  constructor(private storage: LocalStorageService) {
    this.setData(this.storage.retrieve('user'));
    this.storage.observe('user').subscribe(data => this.setData(data));
  }

  get isLoggedIn() {
    return this.token.getValue() !== null;
  }

  setUser(data: UserData) {
    this.storage.store('user', data);
  }

  private setData(data: UserData) {
    if (data) {
      this.token.next(data.token);
      this.customer.next(data.customer);
    }
  }
}
