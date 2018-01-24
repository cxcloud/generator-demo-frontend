import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ProductListComponent } from './product-list';
import { ProductComponent } from './product';
import { SharedModule } from '../shared';
import { ImageZoomModule } from 'angular2-image-zoom';

const DECLARATIONS = [ProductListComponent, ProductComponent];

@NgModule({
  imports: [
    CommonModule,
    ImageZoomModule,
    SharedModule,
    CategoriesRoutingModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: [
    // ProductListResolver
  ]
})
export class CategoriesModule {}
