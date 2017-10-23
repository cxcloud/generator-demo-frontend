import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const DECLARATIONS = [
  ProductListComponent,
  ProductComponent
];

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [
    ...DECLARATIONS,
    ProductDetailsComponent,
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: [
    // ProductListResolver
  ]
})
export class CategoriesModule { }
