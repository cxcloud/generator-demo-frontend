import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MarkdownModule.forRoot(),
    SharedModule
  ],
  declarations: [PageComponent]
})
export class PagesModule {}
