import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header';
import { BrandNavbarComponent } from './brand-navbar';
import { MainMenuComponent } from './main-menu';
import { FooterComponent } from './footer';

const DECLARATIONS = [
  HeaderComponent,
  BrandNavbarComponent,
  MainMenuComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class LayoutModule {}
