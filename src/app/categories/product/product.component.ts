import { Component, OnInit, Input } from '@angular/core';
import { CommerceService } from '../../core/commerce/commerce.service';
import { ActivatedRoute } from '@angular/router';
import { Product, Variant } from '../../types/product.model';
import { Image, Price } from '../../types/common.model';
@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [CommerceService]
})
export class ProductComponent implements OnInit {
  product: Product;
  variants: Variant[];
  variant: Variant;
  image: Image;
  price: Price;
  colors: Array<string>;
  sizes: Array<string>;

  constructor(
    private commerceService: CommerceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Get product by its id
      this.getProduct(params['id']);
    });
  }

  getProduct(productId) {
    this.commerceService
    .getProduct(productId)
    .subscribe(product => {
      if (product) {
        this.product = product;
        console.log(product);
        this.setDefaultVariant(product.masterVariant);
        this.variants = this.getAllVariants(product);

        // Get available colors
        this.colors = this.getAvailableOptions('color');

        // Get available sizes
        this.sizes = this.getAvailableOptions('size');
      }
    });
  }

  setDefaultVariant(variant) {
    this.variant = variant;
    this.image = variant.images[0];
    this.price = variant.prices[0];
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

  getAllVariants(product) {
   return product.variants.reduce((acc: Variant[], variant: Variant) => {
    acc.push(variant);
    return acc;
   }, [product.masterVariant]);
  }

  selectImage(image) {
    this.image = image;
  }

  getVariantByAttribute(attrName, event) {
    const selectedVariant = this.variants.filter(variant => {
      for (let i = 0; i < variant.attributes.length; i += 1) {
        if (variant.attributes[i].name === attrName &&
          variant.attributes[i].value === event.target.value) {
          return true;
        }
      }
    })[0];
    this.variant = selectedVariant;
  }
}
