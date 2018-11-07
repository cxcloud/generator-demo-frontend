import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { PageComponent } from './page';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, PagesRoutingModule],
  declarations: [PageComponent]
})
export class PagesModule {}
