import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageZoomModule } from 'angular2-image-zoom';
import { SharedModule } from '../shared';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ProductComponent } from './product';
import { ProductListComponent } from './product-list';

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
