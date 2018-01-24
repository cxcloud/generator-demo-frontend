import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './page';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, SharedModule, PagesRoutingModule],
  declarations: [PageComponent]
})
export class PagesModule {}
