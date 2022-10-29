import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-data-holder',
  templateUrl: './dashboard-data-holder.component.html',
  styleUrls: ['./dashboard-data-holder.component.scss']
})
export class DashboardDataHolderComponent implements OnInit {

  @Input() item = '';
  constructor() { }
  name:string = "Google"

  ngOnInit(): void {
  }

}
