import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesService } from './pages.service';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, MarkdownModule.forRoot()],
  declarations: [PageComponent],
  providers: [PagesService]
})
export class PagesModule {}
