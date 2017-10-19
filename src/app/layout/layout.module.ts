import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BrandNavbarComponent } from './brand-navbar/brand-navbar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';

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
    RouterModule
  ],
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...DECLARATIONS
  ]
})
export class LayoutModule { }
