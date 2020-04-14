import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BookingRequest } from './bookingrequest';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  constructor(private http: HttpClient) { }

  bookingrequestModel = new BookingRequest('', '', 'venue', '', new Date(), new Date(), '');
  response_msg = '';

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    // log the value to check
    console.log('You submitted value: ', form);

    // convert the form data to a JSON
    let params = JSON.stringify(form);

    // To send a GET request, use the concept of URL rewriting to pass data to the backend
    // this.http.get<Order>('http://localhost/cs4640/inclass11/ngphp-get.php?str='+params)
    // To send a POST request, pass data as an object
    this.http.post<BookingRequest>('http://localhost/WEB_PL/event-booking-php/booking/createBooking.php', params)
      .subscribe((data) => {
        // Receive a response successfully, do something here

        let curr_name = (data["content"][0].receiver);

        if (curr_name === "BAD NAME") {
          this.response_msg = 'This username does not exist. Please try again.';
        }
        else {
          this.response_msg = 'Your request to ' + curr_name + ' has been sent!';
        }
      }, (error) => {
        // An error occurs, handle an error in some way
        console.log('Error ', error);
      })
  }



}