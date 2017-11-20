import { LoginComponent } from './login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: MyAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
