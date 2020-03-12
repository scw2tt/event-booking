// Emily Mussey & Sean Wolfe

import { Component, OnInit } from '@angular/core';

// Ensures capacity is >= 100 and States how far we are from 100

function checkCap() {

    var pass = <HTMLInputElement>document.getElementById('pwd');
    if(pass.checkValidity() && (<HTMLInputElement>document.getElementById('vname')).checkValidity() && (<HTMLInputElement>document.getElementById('cap')).checkValidity()
    && (<HTMLInputElement>document.getElementById('add1')).checkValidity() && (<HTMLInputElement>document.getElementById('city')).checkValidity() && (<HTMLInputElement>document.getElementById('state')).checkValidity()
  && (<HTMLInputElement>document.getElementById('zip')).checkValidity() && (<HTMLInputElement>document.getElementById('email')).checkValidity())
    {
      var hold = (<HTMLInputElement>document.getElementById('cap'));
        if(Number(hold.value)<100)
        {
          var away = function (a) {return 100 - a};

          alert("We are currently only accepting venues with a capacity of 100 or more. You are " + away(hold.value) +" people away from our minimum.");
        }
    }

  }

// Shows state if inside USA

function checkUSA() {
    var country = <HTMLSelectElement>document.getElementById("country");
    var state = document.getElementById("statelabel");
    var state2 = document.getElementById("stateselect");


        if (country.value == "US") {
            state.style.display='inline';
            state2.style.display='inline';
        }
        else
        {
            state.style.display='none';
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

  myChange() {
    checkUSA();
  }


}
