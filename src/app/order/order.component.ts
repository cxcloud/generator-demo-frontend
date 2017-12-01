import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '@cxcloud/ct-types/orders';
import { Address } from '@cxcloud/ct-types/common';
import { CartService } from '../core/cart/cart.service';
import { OrderService } from '../core/order/order.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order: Order;
  shippingAddress: Address;
  billingAddress: Address;

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.orderService.order.subscribe(order => {
      if (order === null) {
        return;
      }
      this.order = order;
      this.shippingAddress = this.order.shippingAddress;
      this.billingAddress = this.order.billingAddress;
    });
  }

  goToHomePage() {
    this.router.navigateByUrl('/');
  }
}
