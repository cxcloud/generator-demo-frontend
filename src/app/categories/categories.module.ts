import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const DECLARATIONS = [
  ProductListComponent
];

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [
    ...DECLARATIONS,
    ProductComponent
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: [
    // ProductListResolver
  ]
})
export class CategoriesModule { }
