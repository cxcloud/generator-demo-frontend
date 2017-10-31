import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import {ImageZoomModule} from 'angular2-image-zoom';

const DECLARATIONS = [
  ProductListComponent,
  ProductComponent
];

@NgModule({
  imports: [
    CommonModule,
    ImageZoomModule,
    SharedModule,
    CategoriesRoutingModule
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: [
    // ProductListResolver
  ]
})
export class CategoriesModule { }
