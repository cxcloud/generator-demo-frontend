import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared';
import { HeaderComponent, SearchPopoverComponent } from './header';
import { BrandNavbarComponent } from './brand-navbar';
import { MainMenuComponent } from './main-menu';
import { FooterComponent } from './footer';
import { SearchModule } from '../search';

const DECLARATIONS = [
  HeaderComponent,
  SearchPopoverComponent,
  BrandNavbarComponent,
  MainMenuComponent,
  FooterComponent
];

@NgModule({
  imports: [
    SharedModule,
    SearchModule,
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
