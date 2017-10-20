import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../mock/products';
import { Product } from '../../types/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = PRODUCTS;
  constructor() { }

  ngOnInit() {
  }

}
