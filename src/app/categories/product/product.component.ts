import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../../mock/products';
import { Product } from '../../types/product.model';
import { Variant } from '../../types/product.model';
@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = PRODUCTS[0];
  variants: Variant[];
  colors: Array<string>;
  sizes: Array<string>;
  constructor() { }

  ngOnInit() {
    this.variants = this.getAllVariants();
    this.colors = this.getAvailableOptions('color');
    this.sizes = this.getAvailableOptions('size');
  }

  getAvailableAmount() {
  }

  getAvailableOptions(attributeName: string) {

    return this.variants.reduce((acc, variant) => {
      variant.attributes.forEach(attr => {

        if (attributeName === 'color' && attr.name === attributeName) {

          if (acc.indexOf(attr.value.label.en) === -1) {
            acc.push(attr.value.label.en);
          }
        } else if (attributeName === 'size' && attr.name === attributeName) {
          if (acc.indexOf(attr.value) === -1) {
            acc.push(attr.value);
          }
        }
      });
      return acc;
    }, []);
  }

  getAllVariants() {
   return this.product.variants.reduce((acc: Variant[], variant: Variant) => {
    acc.push(variant);
    return acc;
   }, [this.product.masterVariant]);
  }
}
