import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { OAuthToken, Customer } from '@cxcloud/ct-types/customers';
import { LocalStorageService } from 'ngx-webstorage';

interface UserData {
  token: OAuthToken;
  customer: Customer;
}

@Injectable()
export class CurrentUserService {
  public token = new BehaviorSubject<OAuthToken>(null);
  public customer = new BehaviorSubject<Customer>(null);

  constructor(private storage: LocalStorageService, private router: Router) {
    const token = this.storage.retrieve('token');
    const customer = this.storage.retrieve('customer');
    if (token) {
      this.token.next(token);
    }
    if (customer) {
      this.customer.next(customer);
    }
    this.token.subscribe(change => this.storage.store('token', change));
    this.customer.subscribe(change => this.storage.store('customer', change));
  }

  get isLoggedIn() {
    return this.customer.getValue() !== null;
  }
}
