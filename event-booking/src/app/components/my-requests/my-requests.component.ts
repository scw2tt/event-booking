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

  // add a function here for the show and hide
  show_hide(show, hide) {
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
  }

}
