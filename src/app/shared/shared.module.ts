import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfoCardComponent } from './info-card/info-card.component';
import { CheckoutButtonComponent } from './checkout-button/checkout-button.component';
import { CartOrderContentComponent } from './cart-order-content/cart-order-content.component';
import { QuantityInputComponent } from './quantity-input/quantity-input.component';


const DECLARATIONS = [
  InfoCardComponent,
  CheckoutButtonComponent,
  CartOrderContentComponent,
  QuantityInputComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: []
})
export class SharedModule { }
