import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Venue } from './venue';



function checkCap() {

  var pass = <HTMLInputElement>document.getElementById('password');
  if (pass.checkValidity() && (<HTMLInputElement>document.getElementById('name')).checkValidity() && (<HTMLInputElement>document.getElementById('cap')).checkValidity()
    && (<HTMLInputElement>document.getElementById('address_line_1')).checkValidity() && (<HTMLInputElement>document.getElementById('city')).checkValidity() && (<HTMLInputElement>document.getElementById('state')).checkValidity()
    && (<HTMLInputElement>document.getElementById('zipcode')).checkValidity() && (<HTMLInputElement>document.getElementById('email')).checkValidity()) {
    var hold = (<HTMLInputElement>document.getElementById('capacity'));
    if (Number(hold.value) < 100) {
      var away = function (a) { return 100 - a };

      alert("We are currently only accepting venues with a capacity of 100 or more. You are " + away(hold.value) + " people away from our minimum.");
    }
  }

}


function checkUSA() {
  var country = <HTMLSelectElement>document.getElementById("country");
  var state = document.getElementById("statelabel");
  var state2 = document.getElementById("stateselect");


  if (country.value == "US") {
    state.style.display = 'inline';
    state2.style.display = 'inline';
  }
  else {
    state.style.display = 'none';
  }
}


@Component({
  selector: 'app-venue-signup',
  templateUrl: './venue-signup.component.html',
  styleUrls: ['./venue-signup.component.css']
})
export class VenueSignupComponent implements OnInit {

  constructor(private http: HttpClient) { }

  responsedata = new Venue('', '', 0, '', '', '', '', '', 0, '', '', '');
  venueModel = new Venue('', '', 0, '', '', '', '', '', 0, '', '', '');
  confirm_msg = '';
  data_submitted = '';
  email_response = '';
  name_response = '';
  account_created = false;
  ngOnInit(): void {
  }

  onClick() {
    checkCap();
  }

  myChange() {
    checkUSA();
  }

  onSubmit(form: any): void {
    // log the value to check
    console.log('You submitted value: ', form);

    // convert the form data to a JSON
    let params = JSON.stringify(form);

    // To send a GET request, use the concept of URL rewriting to pass data to the backend
    // this.http.get<Order>('http://localhost/cs4640/inclass11/ngphp-get.php?str='+params)
    // To send a POST request, pass data as an object
    this.http.post<Venue>('http://localhost/WEB_PL/event-booking-php/venue/venueSignUp.php', params)
      .subscribe((data) => {
        // Receive a response successfully, do something here
        var email = (data["content"][0].email);
        console.log('Response from backend ', data);
        console.log('Email from backend ', email);
        console.log('Name from backend ', data["content"][0].name);
        this.responsedata = data;     // assign response to responsedata property to bind to screen later
        this.email_response = data["content"][0].email;
        this.name_response = data["content"][0].name;
        if ((this.email_response.length > 0) && !(this.email_response === "BAD EMAIL")) {
          if ((this.name_response.length > 0) && !(this.name_response === "BAD NAME")) {
            this.account_created = true;
          }
        } else {
          this.account_created = false;
        }

      }, (error) => {
        // An error occurs, handle an error in some way
        console.log('Error ', error);
      })

  }


}
