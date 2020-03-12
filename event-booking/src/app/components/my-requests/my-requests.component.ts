import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // add a function here for the show and hide filtering
  show_hide(show, hide) {
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
  }

  // this function will highlight closely expring dates in red
  // NOT implemented for this assignment
  red_expiring() {
    // define anonymous function
    var red_text = function () {
      // red the text
    }

    // for loop thru all of the entries

    // if it applies, red the text by calling the anonymous function
  }

}
