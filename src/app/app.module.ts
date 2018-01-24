import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout';
import { HomeModule } from './home/home.module';
import { CategoriesModule } from './categories/categories.module';
import { SharedModule } from './shared';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { LoginModule } from './login/login.module';
import { PagesModule } from './pages/pages.module';
import { OrderModule } from './order/order.module';

@NgModule({
  imports: [
    BrowserModule,
    Ng2Webstorage.forRoot({
      prefix: 'cxcloud-demo',
      separator: '.',
      caseSensitive: true
    }),
    CoreModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    HomeModule,
    CategoriesModule,
    LayoutModule,
    CartModule,
    CheckoutModule,
    LoginModule,
    OrderModule,
    AppRoutingModule,
    PagesModule
  ],
  declarations: [AppComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
