import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import { InfoCardComponent } from './info-card';
import { GotoButtonComponent } from './goto-button';
import { CartOrderContentComponent } from './cart-order-content';
import { QuantityInputComponent } from './quantity-input';
import { StepsComponent } from './steps';
import { ErrorDisplayComponent } from './error-display';
import { SpinnerComponent } from './spinner';
import { OrderDetailsComponent } from './order-details';
import { CountryPipe } from '../utils/countries/country.pipe';

const DECLARATIONS = [
  InfoCardComponent,
  GotoButtonComponent,
  CartOrderContentComponent,
  QuantityInputComponent,
  StepsComponent,
  ErrorDisplayComponent,
  SpinnerComponent,
  OrderDetailsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  declarations: [...DECLARATIONS, CountryPipe],
  exports: [...DECLARATIONS, MarkdownModule],
  providers: []
})
export class SharedModule {}
