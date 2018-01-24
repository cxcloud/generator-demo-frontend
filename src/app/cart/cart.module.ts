import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core';
import { SharedModule } from '../shared';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

const DECLARATIONS = [CartComponent];

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, CartRoutingModule],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: []
})
export class CartModule {}
