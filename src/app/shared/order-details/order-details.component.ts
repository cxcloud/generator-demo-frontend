import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '@cxcloud/ct-types/carts';
import { Order } from '@cxcloud/ct-types/orders';
import { Address } from '@cxcloud/ct-types/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  @Input('source') source: Cart | Order;
  @Input('icon') icon: string;
  @Input('label') label: string;
  @Input('isUrl') isUrl: boolean;

  columns: Array<string> = ['Description', 'Quantity', 'Price', 'Total'];
  shippingAddress: Address;
  billingAddress: Address;

  constructor() {}

  ngOnInit() {
    if (this.source) {
      this.shippingAddress = this.source.shippingAddress;
      this.billingAddress = this.source.billingAddress;
    }
  }
}
