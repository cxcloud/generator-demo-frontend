import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { BrandNavbarComponent } from './layout/brand-navbar/brand-navbar.component';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeModule } from './home/home.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BrandNavbarComponent,
    FooterComponent,
    HeaderComponent,
    MainMenuComponent
  ],

  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
