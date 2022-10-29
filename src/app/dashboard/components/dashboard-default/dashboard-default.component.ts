import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DashboardServiceService} from '../../service/dashboard-service.service';
import { HttpClientModule } from '@angular/common/http'

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
    itemList: any [] = [];

  ngOnInit(): void {
    this.dashboardServiceService.getData().subscribe(res => {
      this.itemList = res.entries;
      console.log(this.itemList);
    })
    //let result = this.dashboardServiceService.getData();
    //console.log(result);
  }

}
