import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './shipping/payment/payment.component';
import { ShippingInfoComponent } from './shipping/shipping-info/shipping-info.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
    children: [
      {
        path: '',
        component: ShippingComponent,
        children: [
          {
            path: 'shipping',
            component: ShippingInfoComponent
          },
          {
            path: 'payment',
            component: PaymentComponent
          },
        ]
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
