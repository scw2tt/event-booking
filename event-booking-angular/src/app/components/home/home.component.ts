import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }
  hold = JSON.parse(localStorage.getItem('used'));

  loggedin = false;

  ngOnInit() {

    // Hardcoded Arrow Function

    var hello;
    hello = val => "Welcome to Eventz  " + val + "!";
    if (this.hold === null)
      document.getElementById("intro").innerHTML = hello("");
    else {
      document.getElementById("intro").innerHTML = hello(this.hold.name);
      this.loggedin = true;
    }


    /*if(isset($_SESSION['names']))
    {
      document.getElementById("intro").innerHTML = hello($_SESSION['names']);
    }*/

    //    else{

    //  }

  }

}
