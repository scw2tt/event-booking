import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

// Hardcoded Arrow Function

    var hello;
    hello = val => "Welcome to Eventz,  " + val + "!";
    document.getElementById("intro").innerHTML = hello("Johnny Cash");
  }

}
