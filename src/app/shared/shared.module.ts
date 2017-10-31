import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCardComponent } from './info-card/info-card.component';


const DECLARATIONS = [
  InfoCardComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS
  ],
  providers: []
})
export class SharedModule { }
