import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCardComponent } from './info-card/info-card.component';
import { CheckoutButtonComponent } from './checkout-button/checkout-button.component';
import { CartOrderContentComponent } from './cart-order-content/cart-order-content.component';


const DECLARATIONS = [
  InfoCardComponent,
  CheckoutButtonComponent,
  CartOrderContentComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: []
})
export class SharedModule { }
