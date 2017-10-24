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
    this.getProductVariants();
  }

  getProductVariants() {
    // Add master variant as first item in variants
    this.products.forEach(product => {
      if (product.masterVariant) {
        product.variants.unshift(product.masterVariant);
      }
    });
  }

}
