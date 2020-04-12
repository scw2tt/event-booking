import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  responsedata = new User(-1, '', '', '', '', '', '', '', '', '');
  userModel = new User(-1, '', '', '', '', '', '', '', '', '');
  responseid = -1;
  badEmail = false;
  badPassword = false;
  loggedIn = false;
  handleLogin(data: User) {
    console.log("front end submission", data);
  }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    // log the value to check
    console.log('You submitted value: ', form);
    // convert the form data to a JSON
    let params = JSON.stringify(form);

    let php_script_url = 'http://localhost/WEB_PL/event-booking-php/performer/performerLogin.php';

    if (form['account_type'] === 'venue') {
      php_script_url = 'http://localhost/WEB_PL/event-booking-php/venue/venueLogin.php';
    }
    // To send a GET request, use the concept of URL rewriting to pass data to the backend
    // this.http.get<Order>('http://localhost/cs4640/inclass11/ngphp-get.php?str='+params)
    // To send a POST request, pass data as an object
    this.http.post<User>(php_script_url, params)
      .subscribe((data) => {
        // Receive a response successfully, do something here
        var id = (data["content"][0].performer_id);
        console.log('Response from backend ', data);
        console.log('performer id ', id);

        if (data["content"][0].email === "BAD EMAIL") {
          this.badEmail = true;
        }
        else if (data["content"][0].password === "BAD PASSWORD") {
          this.badPassword = true;
        }
        else {
          this.badEmail = false;
          this.badPassword = false;
          this.loggedIn = true;
          // redirect the user to the profile page


        }
      }, (error) => {
        // An error occurs, handle an error in some way
        console.log('Error ', error);
      })
  }


}
