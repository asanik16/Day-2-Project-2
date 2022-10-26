import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDefaultComponent } from './components/login-default/login-default.component';
import { LoginFormComponent } from './components/login-form/login-form.component';



@NgModule({
  declarations: [
    LoginDefaultComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginDefaultComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
