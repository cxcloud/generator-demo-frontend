import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../../mock/products';
import { Product } from '../../types/product.model';
@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = PRODUCTS[0];
  constructor() { }

  ngOnInit() {

  }
}
