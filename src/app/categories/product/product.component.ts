import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product: any;
  image: any;
  price: any;
  centAmount: number;

  constructor() { }

  ngOnInit() {
    const masterVariant = this.getMasterVariant();
    this.image = masterVariant.images[0];
    this.price = masterVariant.prices[0].value;
    this.centAmount = this.price.centAmount / 100;
  }

  getMasterVariant() {
    const masterVariant = {...this.product.masterVariant};

    if (masterVariant.prices.length === 0) {
      masterVariant.prices = [...this.product.variants[0].prices];
    }
    if (masterVariant.images.length === 0) {
      masterVariant.images = [...this.product.variants[0].images];
    }
    return masterVariant;
  }
}
