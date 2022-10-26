import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDefaultComponent } from './login/components/login-default/login-default.component'
const routes: Routes = [
  {
    path: 'login',
    component: LoginDefaultComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
