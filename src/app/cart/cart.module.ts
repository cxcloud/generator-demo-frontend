import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

const DECLARATIONS = [
  CartComponent
];

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: []
})
export class CartModule { }
