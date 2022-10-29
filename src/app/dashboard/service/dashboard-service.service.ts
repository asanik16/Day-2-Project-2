import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private val = "ANIK";
  getData() {
    return this.val;
  }
  constructor() { }
}
