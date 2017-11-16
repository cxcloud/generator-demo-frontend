import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './shipping/payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ShippingInfoComponent } from './shipping/shipping-info/shipping-info.component';

const DECLARATIONS = [
  CheckoutComponent,
  ShippingComponent,
  PaymentComponent,
  ConfirmationComponent,
  ShippingInfoComponent
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
