import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { User } from './user';
import { NgModule }             from '@angular/core';
//import { ProfileComponent } from './components/profile/profile.component';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

/*@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})*/


export class SignupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }


  responsedata = new User(-1, '', '', '', '', '', '', '', '', '',-1);
  userModel = new User(-1, '', '', '', '', '', '', '', '', '', -1);
  responseid = -1;
  badEmail = false;
  badPassword = false;
  loggedIn = false;
  empty = false;
  test = true;
  handleLogin(data: User) {
    console.log("front end submission", data);
  }

  ngOnInit(): void {

    if(localStorage.getItem("used") != null)
    {
        localStorage.clear();
        this.router.navigate(['/']);
    }

  }

  onSubmit(form: any): void {

    // log the value to check
    console.log('You submitted value: ', form);
    // convert the form data to a JSON
    let params = JSON.stringify(form);

    let php_script_url = 'http://localhost:80/sessions/WEB_PL/event-booking-php/performer/performerLogin.php';

    if (form['account_type'] === 'venue') {

      php_script_url = 'http://localhost:80/sessions/WEB_PL/event-booking-php/venue/venueLogin.php';
    }

    if(form['passwordd'] == '' || form['email']=='')
        this.empty = true;
    // To send a GET request, use the concept of URL rewriting to pass data to the backend
    // this.http.get<Order>('http://localhost/cs4640/inclass11/ngphp-get.php?str='+params)
    // To send a POST request, pass data as an object


    else
    {
      var ouruser = new User(-1, '', '', '', '', '', '', '', '', '', -1);

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
          this.empty = false;

          // local storage used to create and maintain session in angular
          // creating object

        if(form['account_type'] === 'venue')
          {
            ouruser.is_venue = 'true';
            ouruser.is_performer = 'false';
            ouruser.id = data["content"][0].venue_id;
            ouruser.genre = "";
            ouruser.location = data["content"][0].city + ", " + data["content"][0].state ;

          }
          else {
            ouruser.is_venue = 'false';
            ouruser.is_performer = 'true';
            ouruser.id = data["content"][0].performer_id;
            ouruser.genre = data["content"][0].genre;
            ouruser.location = data["content"][0].location;

          }
          ouruser.about_me = data["content"][0].about_me;
          ouruser.password = data["content"][0].password;
          ouruser.email = data["content"][0].email;
          ouruser.link = data["content"][0].link;
          ouruser.name = data["content"][0].name;


        //  console.log('Test test test ', ouruser.location );

        localStorage.setItem('used', JSON.stringify(ouruser));
        //console.log('Test test test ', JSON.stringify(ouruser) );
          // redirect the user to the profile page
         this.router.navigate(['/profile']);


        }
      }, (error) => {
        // An error occurs, handle an error in some way
        console.log('Error ', error);
      })
  }
}


}
