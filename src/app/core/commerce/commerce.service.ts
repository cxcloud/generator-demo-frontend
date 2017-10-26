import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from '../../types/category.model';



@Injectable()
export class CommerceService {
  private apiUrl = 'https://demo.cxcloud.xyz/api/v1';

  constructor(private http: Http) {}

  getCategories(): Observable<Category[]> {
    return this.http
    .get(`${this.apiUrl}/categories`)
    .map(res =>  res.json() as Category[]);
  }
}
