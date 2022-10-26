import { formatCurrency } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDefaultComponent } from './login/components/login-default/login-default.component'
import { LoginFormComponent } from './login/components/login-form/login-form.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginDefaultComponent
  },
  {
    path: 'form',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
