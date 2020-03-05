import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ContentItemComponent } from './components/content-item/content-item.component';
import { AboutComponent } from './components/about/about.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';
import { MyCalendarComponent } from './components/my-calendar/my-calendar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ArtistSignupComponent } from './components/artist-signup/artist-signup.component';
import { VenueSignupComponent } from './components/venue-signup/venue-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    MenuItemComponent,
    ContentItemComponent,
    AboutComponent,
    ArchiveComponent,
    MyRequestsComponent,
    MyCalendarComponent,
    SignupComponent,
    ArtistSignupComponent,
    VenueSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent, AngularMaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
