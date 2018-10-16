import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search';
import { SharedModule } from '../shared';
import { BrandNavbarComponent } from './brand-navbar';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { MainMenuComponent } from './main-menu';

const DECLARATIONS = [
  HeaderComponent,
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
