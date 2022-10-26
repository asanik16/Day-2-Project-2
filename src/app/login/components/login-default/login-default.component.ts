import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-default',
  templateUrl: './login-default.component.html',
  styleUrls: ['./login-default.component.scss']
})
export class LoginDefaultComponent implements OnInit {

  title: string = "default page title"

  constructor() { }

  ngOnInit(): void {
  }

}
