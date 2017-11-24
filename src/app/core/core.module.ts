import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth/auth.interceptor';
import { CurrentUserService } from './auth/current-user.service';
import { AuthService } from './auth/auth.service';
import { CartService } from './cart/cart.service';
import { ShippingService } from './shipping/shipping.service';
import { CommerceService } from './commerce/commerce.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],

  providers: [
    CurrentUserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    CommerceService,
    CartService,
    AuthService,
    ShippingService
  ]
})
export class CoreModule {
  constructor(private auth: AuthService, private cart: CartService) {}
}
