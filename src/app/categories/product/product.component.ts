import { Component, OnInit, Input } from '@angular/core';
import { CommerceService } from '../../core/commerce/commerce.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Variant } from '@cxcloud/ct-types/products';
import { Image, Price } from '@cxcloud/ct-types/common';
import { CartService } from '../../core/cart/cart.service';

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
  productDetails: Array<any>;

  constructor(
    private commerceService: CommerceService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  get availability(): Array<number> {
    return Array.from(Array(10).keys()).map(x => x + 1);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Get product by its id
      this.getProduct(params['id']);
    });
  }



  getProduct(productId) {
    this.commerceService.getProduct(productId).subscribe(product => {
      if (product) {
        this.product = product;
        this.setDefaultVariant(product.masterVariant);

        // Get all variants (including master variant)
        this.variants = this.getAllVariants(product);

        // Get available color options
        this.colors = this.getAvailableVariantOptions('color');

        // Get available size options
        this.sizes = this.getAvailableVariantOptions('size');
      }
    });
  }

  setDefaultVariant(variant) {
    this.selectedVariant = variant;
    this.image = variant.images[0];
    this.price = variant.prices[0];

    this.productDetails = [
      this.getAttribute('designer'),
      this.getAttribute('style')
    ];
  }

  getAllVariants(product) {
    return product.variants.reduce(
      (acc: Variant[], variant: Variant) => {
        acc.push(variant);
        return acc;
      },
      [product.masterVariant]
    );
  }

  getAttribute(name) {
    return this.selectedVariant.attributes.filter(attr => {
      return attr.name === name;
    })[0];
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
          if (key === 'label' || key === 'en') {
            isOptionAvailable(array, property[key]);
          }
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

  changeSelectedImage(image) {
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
          if (key === 'label' || key === 'en') {
            deepCheck(property[key], value);
          }
        });
      }
    };
    // Updated selected variant
    this.selectedVariant = this.variants.filter(variant => {
      for (let i = 0; i < variant.attributes.length; i += 1) {
        if (variant.attributes[i].name === attrName) {
          return deepCheck(variant.attributes[i].value, $event.target.value);
        }
      }
    })[0];
  }

  getItemQuantity(q) {
    console.log(q);
  }

  addItemToCart(quantity) {
    this.cartService.addLineItem(this.product.id, undefined, Number(quantity));
  }
}
