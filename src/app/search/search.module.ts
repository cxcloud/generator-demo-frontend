import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

const DECLARATIONS = [SearchComponent, SearchInputComponent];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: []
})
export class SearchModule {}
