import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDefaultComponent } from './components/dashboard-default/dashboard-default.component';
import { DashboardDataHolderComponent } from './components/dashboard-data-holder/dashboard-data-holder.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    DashboardDefaultComponent,
    DashboardDataHolderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DashboardDefaultComponent
  ]
})
export class DashboardModule { }
