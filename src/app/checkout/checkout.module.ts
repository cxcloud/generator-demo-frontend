import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { ConfirmationComponent } from './confirmation';
import { ShippingComponent } from './shipping';
import { PaymentComponent } from './shipping/payment';
import { ShippingInfoComponent } from './shipping/shipping-info';

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
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: []
})
export class CheckoutModule {}
