import { Component, OnInit } from '@angular/core';
import { Cart } from '../types/cart.model';
import { Router, NavigationEnd } from '@angular/router';

import { CART } from '../mock/carts';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart: Cart = CART;

  currentStep: any;
  steps: Array<any> = [
    {stage: 1, key: 'shipping', name: 'Shipping'},
    {stage: 2, key: 'payment', name: 'Payment'},
    {stage: 3, key: 'confirmation', name: 'Confirmation'}
  ];

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const routeName = event.url.split('/').pop();
        this.currentStep = this.steps.filter(step => step.key === routeName)[0];
      }
    });
  }

  ngOnInit() {}
}
