import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {





  title : string = 'Anik\'s Project-2';
  value : number = 11;
  array:string[] = ['red', 'green', 'blue'];
  
  ngOnInit() {
    this.title = 'changed from on Init';
  }
  
  
  onButtonClick(): void {
    this.value++;
  }
}
