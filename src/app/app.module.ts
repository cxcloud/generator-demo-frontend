import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartModule } from './cart';
import { CoreModule } from './core';
import { CategoriesModule } from './categories';
import { HomeModule } from './home';
import { LayoutModule } from './layout';
import { SharedModule } from './shared';
import { CheckoutModule } from './checkout';
import { LoginModule } from './login';
import { PagesModule } from './pages';
import { OrderModule } from './order';

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
