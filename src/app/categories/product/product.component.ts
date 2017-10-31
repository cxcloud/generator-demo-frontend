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
  selectedVariant: Variant;
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
        this.setDefaultVariant(product.masterVariant);

        // Get all variants (including master variant)
        this.variants = this.getAllVariants(product);

        // Get available colors
        this.colors = this.getAvailableVariantOptions('color');

        // Get available sizes
        this.sizes = this.getAvailableVariantOptions('size');
      }
    });
  }

  setDefaultVariant(variant) {
    this.selectedVariant = variant;
    this.image = variant.images[0];
    this.price = variant.prices[0];
  }

  getAllVariants(product) {
    return product.variants.reduce((acc: Variant[], variant: Variant) => {
     acc.push(variant);
     return acc;
    }, [product.masterVariant]);
   }

  getAvailableVariantOptions(attributeName: string) {

    const isOptionAvailable = function(array, property) {
      if (typeof property !== 'object') {
        if (array.indexOf(property) === -1) {
          array.push(property);
          return array;
        }
      } else {
        Object.keys(property).forEach(key => {
          isOptionAvailable(array, property[key]);
        });
      }
    };

    return this.variants.reduce((acc, variant) => {
      variant.attributes.forEach(attr => {
        if (attr.name === attributeName) {
          isOptionAvailable(acc, attr.value);
        }
      });
      return acc;
    }, []);
  }


  selectImage(image) {
    this.image = image;
  }

  getVariantByAttribute(attrName, $event) {

    const deepCheck = function(property, value) {
      if (typeof property !== 'object') {
        if (property === value) {
          return true;
        }
      } else {
        Object.keys(property).forEach(key => {
          deepCheck(property[key], value);
        });
      }
    };

    this.selectedVariant = this.variants.filter(variant => {
      for (let i = 0; i < variant.attributes.length; i += 1) {
        if (variant.attributes[i].name === attrName) {
          return deepCheck(variant.attributes[i].value, $event.target.value);
        }
      }
    })[0];
  }
}
