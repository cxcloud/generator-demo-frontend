import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ShippingMethod } from '@cxcloud/ct-types/shipping';

@Injectable()
export class ShippingService {
  constructor(private http: HttpClient) {}

  getShippingMethods(): Observable<ShippingMethod[]> {
    return this.http.get<ShippingMethod[]>('/shipping/methods');
  }
}
