import { formatCurrency } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDefaultComponent } from './login/components/login-default/login-default.component'
import { LoginFormComponent } from './login/components/login-form/login-form.component'
import { DashboardDefaultComponent } from './dashboard/components/dashboard-default/dashboard-default.component'
import { DashboardDataHolderComponent } from './dashboard/components/dashboard-data-holder/dashboard-data-holder.component';

const routes: Routes = [
  {
    path: 'dashboard-data',
    component: DashboardDataHolderComponent
  },
  {
    path: '',
    component: DashboardDefaultComponent
  },
  {
    path: 'dashboard',
    component: DashboardDefaultComponent
  },
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
