import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthService } from './auth/auth.service';
import { CurrentUserService } from './auth/current-user.service';
import { CartService } from './cart/cart.service';
import { CommerceService } from './commerce/commerce.service';
import { ContentService } from './content/content.service';
import { OrderService } from './order/order.service';
import { SearchService } from './search/search.service';

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
    OrderService,
    AuthService,
    ContentService,
    SearchService
  ]
})
export class CoreModule {
  constructor(private auth: AuthService, private cart: CartService) {}
}
