import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(
    private httpClient: HttpClient 
  ) { }

  private userData: string[] = [];

  setData(data:string[]) {
    this.userData = data;
  }

  private val = "ANIK";

  getData(): Observable<any> {  
    let url = "https://api.publicapis.org/entries";
    return this.httpClient.request('GET', url, {responseType:'json'});
  }
}
