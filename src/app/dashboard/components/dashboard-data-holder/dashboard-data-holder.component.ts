import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-data-holder',
  templateUrl: './dashboard-data-holder.component.html',
  styleUrls: ['./dashboard-data-holder.component.scss']
})
export class DashboardDataHolderComponent implements OnInit {

  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }
  name:string = "Google"

  ngOnInit(): void {
  }

}
