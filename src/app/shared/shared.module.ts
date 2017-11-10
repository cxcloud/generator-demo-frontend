import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfoCardComponent } from './info-card/info-card.component';
import { GotoButtonComponent } from './goto-button/goto-button.component';
import { CartOrderContentComponent } from './cart-order-content/cart-order-content.component';
import { QuantityInputComponent } from './quantity-input/quantity-input.component';
import { StepsComponent } from './steps/steps.component';


const DECLARATIONS = [
  InfoCardComponent,
  GotoButtonComponent,
  CartOrderContentComponent,
  QuantityInputComponent,
  StepsComponent
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
