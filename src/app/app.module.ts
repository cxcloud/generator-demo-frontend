import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart';
import { CategoriesModule } from './categories';
import { CheckoutModule } from './checkout';
import { CoreModule } from './core';
import { HomeModule } from './home';
import { LayoutModule } from './layout';
import { LoginModule } from './login';
import { OrderModule } from './order';
import { PagesModule } from './pages';
import { SearchModule } from './search';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot({
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
    PagesModule,
    SearchModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
