import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MyAccountComponent } from './my-account/my-account.component';

const DECLARATIONS = [LoginComponent, MyAccountComponent];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CoreModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: []
})
export class LoginModule {}
