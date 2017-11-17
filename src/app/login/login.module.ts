import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

const DECLARATIONS = [LoginComponent];

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, LoginRoutingModule],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: []
})
export class LoginModule {}
