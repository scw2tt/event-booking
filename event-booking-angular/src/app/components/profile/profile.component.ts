import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor( private router: Router) {}



  hold = JSON.parse(localStorage.getItem('used'));

  name = "";
  genre = "";
  location = "";
  link = "";
  email = "";
  about = "";
  haslink = false;


  ngOnInit(): void {
    if(this.hold===null)
      this.router.navigate(['/signin']);
    this.name = this.hold.name;
    this. genre = this.hold.genre;
    this.location = this.hold.location;
    this.link = this.hold.link;
    if(this.link!=="")
      this.haslink= true;
    this.email = this.hold.email;
    this.about = this.hold.about_me;
    //if(localStorage.getItem("used") === null)
    //{
      //this.router.navigate(['/']);
    //}
  }

}
