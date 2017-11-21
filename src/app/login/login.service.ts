import { Injectable } from '@angular/core';
import { Customer } from '@cxcloud/ct-types/customers';

@Injectable()
export class LoginService {
  public customer: Customer;
  constructor() {}
}
