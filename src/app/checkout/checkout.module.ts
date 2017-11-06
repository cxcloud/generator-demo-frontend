import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';

const DECLARATIONS = [
  CheckoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CheckoutRoutingModule
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: []
})
export class CheckoutModule { }
