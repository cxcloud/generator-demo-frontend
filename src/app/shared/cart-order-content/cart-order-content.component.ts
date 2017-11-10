import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '@cxcloud/ct-types/carts';

@Component({
  selector: 'app-cart-order-content',
  templateUrl: './cart-order-content.component.html',
  styleUrls: ['./cart-order-content.component.scss']
})
export class CartOrderContentComponent implements OnInit {
  @Input() item: LineItem;
  image: any;
  size: any;
  color: any;

  constructor() {}

  ngOnInit() {
    this.image = this.item.variant.images[0];
    this.color = this.getAttributeValue('color');
    this.size = this.getAttributeValue('size');
  }

  getAttributeValue(name) {
    return this.item.variant.attributes.filter(attr => {
      return attr.name === name;
    })[0].value;
  }
}
