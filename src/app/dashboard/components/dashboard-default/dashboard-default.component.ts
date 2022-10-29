import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DashboardServiceService} from '../../service/dashboard-service.service';

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.scss']
})
export class DashboardDefaultComponent implements OnInit {

  items = ['Book', 'pen', 'khata', 'kolom'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  currentItem = "Book";
  constructor(private route: ActivatedRoute, 
    private dashboardServiceService : DashboardServiceService
    ) { }
  ngOnInit(): void {
    let result = this.dashboardServiceService.getData();
    console.log(result);
  }

}
