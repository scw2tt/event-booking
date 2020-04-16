import { Component, OnInit } from '@angular/core';
import { Requests } from './requests';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }

  // add a function here for the show and hide filtering
  show_hide(show, hide) {
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";

    let params = JSON.stringify(localStorage.getItem('used'));

    if(show === 'requests-to-me')
    {

    }
    else
    {

    }

    // To send a GET request, use the concept of URL rewriting to pass data to the backend
    // this.http.get<Order>('http://localhost/cs4640/inclass11/ngphp-get.php?str='+params)
    // To send a POST request, pass data as an object
    this.http.post<Requests>('http://localhost:80/sessions/WEB_PL/event-booking-php/booking/createBooking.php', params)
      .subscribe((data) => {
        // Receive a response successfully, do something here

        let curr_name = (data["content"][0].receiver);

        if (curr_name === "BAD NAME") {
        //  this.response_msg = 'This username does not exist. Please try again.';
        }
        else if (curr_name === "NO EVENT DATE"){
        //  this.response_msg = 'Please enter the event date.';
        }
        else if (curr_name === "NO EXPIRY DATE"){
        //  this.response_msg = 'Please enter the expiration date of this request.';
        }
        else {
        //  this.response_msg = 'Your request to ' + curr_name + ' has been sent!';
        }
      }, (error) => {
        // An error occurs, handle an error in some way
        console.log('Error ', error);
      })
  }


}






  // this function will highlight closely expring dates in red
  // NOT implemented for this assignment
//  red_expiring() {
    // define anonymous function
  //  var red_text = function () {
      // red the text
    //}

    // for loop thru all of the entries

    // if it applies, red the text by calling the anonymous function
  //}

//}
