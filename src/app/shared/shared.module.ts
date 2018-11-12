import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { CountryPipe } from '../utils/countries/country.pipe';
import { CartOrderContentComponent } from './cart-order-content';
import { ErrorDisplayComponent } from './error-display';
import { GotoButtonComponent } from './goto-button';
import { InfoCardComponent } from './info-card';
import { OrderDetailsComponent } from './order-details';
import { PopoverComponent } from './popover';
import { QuantityInputComponent } from './quantity-input';
import { SpinnerComponent } from './spinner';
import { StarsComponent } from './stars/stars.component';
import { StepsComponent } from './steps';

const DECLARATIONS = [
  InfoCardComponent,
  GotoButtonComponent,
  CartOrderContentComponent,
  QuantityInputComponent,
  StepsComponent,
  ErrorDisplayComponent,
  SpinnerComponent,
  OrderDetailsComponent,
  PopoverComponent,
  StarsComponent,
  CountryPipe
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS, MarkdownModule],
  providers: []
})
export class SharedModule {}
