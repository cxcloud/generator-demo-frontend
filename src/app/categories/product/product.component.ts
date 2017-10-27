import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../../mock/products';
import { Product, Variant } from '../../types/product.model';
import { Image } from '../../types/common.model';
@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = PRODUCTS[0];
  variants: Variant[];
  colors: Array<string>;
  sizes: Array<string>;
  image: Image;

  constructor() { }

  ngOnInit() {
    this.variants = this.getAllVariants();
    this.colors = this.getAvailableOptions('color');
    this.sizes = this.getAvailableOptions('size');
    this.image = this.product.masterVariant.images[0];
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

  selectImage(image) {
    this.image = image;
  }
}
