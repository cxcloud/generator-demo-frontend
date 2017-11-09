import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from '../../types/category.model';
import { Product } from '../../types/product.model';
import { Cart } from '../../types/cart.model';

@Injectable()
export class CommerceService {
  private apiUrl = 'https://demo.cxcloud.xyz/api/v1';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  getProducts(categoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/products/byCategory/${categoryId}`
    );
  }

  getProduct(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
  }

  getCart(cartId: string): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/carts/${cartId}`);
  }
}
