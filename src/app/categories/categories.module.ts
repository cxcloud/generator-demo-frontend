import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [
    // ProductListComponent,
    // ProductComponent
  ],
  exports: [
    // ProductListComponent,
    // ProductComponent
  ],
  providers: [
    // ProductListResolver
  ]
})
export class CategoriesModule { }
