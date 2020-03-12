import { Component, OnInit } from '@angular/core';

function checkCap() {

    if(document.getElementById('pwd').checkValidity() && document.getElementById('vname').checkValidity() && document.getElementById('cap').checkValidity()
    && document.getElementById('add1').checkValidity() && document.getElementById('city').checkValidity() && document.getElementById('state').checkValidity()
  && document.getElementById('zip').checkValidity() && document.getElementById('email').checkValidity())
    {
      var hold = document.getElementById('cap');
        if(hold.value<100)
        {
          var away = function (a) {return 100 - a};

          alert("We are currently only accepting venues with a capacity of 100 or more. You are " + away(hold.value) +" people away from our minimum.");
        }
    }

    }

@Component({
  selector: 'app-venue-signup',
  templateUrl: './venue-signup.component.html',
  styleUrls: ['./venue-signup.component.css']
})
export class VenueSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
     checkCap();
    }


}
