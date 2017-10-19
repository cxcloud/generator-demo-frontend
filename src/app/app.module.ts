import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { CategoriesModule } from './categories/categories.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HomeModule,
    LayoutModule,
    CategoriesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],

  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
