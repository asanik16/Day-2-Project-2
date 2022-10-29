import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {





  title : string = 'Anik\'s Project-2';
  value : number = 11;
  array:string[] = ['red', 'green', 'blue'];
  
  constructor(private router: Router){

  }

  ngOnInit() {
    this.title = 'changed from on Init';
  }
  
  
  onButtonClick(): void {
    this.value++;
  }

  goToLogin(): void {
    this.router.navigate(['items']);
  }

}
