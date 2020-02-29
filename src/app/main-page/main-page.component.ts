import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNodeJs() {
    alert('NodeJs says Hi!!!');
  }

  onFlask() {
    alert('Flask says Hi!!!');
  }

  onWeb() {
    var url = 'C:/Hybrid_Skeleton_Application/JqueryAjax/JqueryApp.html';
    var url2 = '/www.google.com';
    window.open(url2);
  }

}
