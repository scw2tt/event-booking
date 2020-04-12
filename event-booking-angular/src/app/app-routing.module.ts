import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArtistSignupComponent } from './components/artist-signup/artist-signup.component';
import { VenueSignupComponent } from './components/venue-signup/venue-signup.component';
import { SignupComponent } from './components/signup/signup.component';
import { componentFactoryName } from '@angular/compiler';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent
  },

  {
    path: 'venuesignup',
    pathMatch: 'full',
    component: VenueSignupComponent
  },

  {
    path: 'artistsignup',
    pathMatch: 'full',
    component: ArtistSignupComponent
  },

  {
    path: 'signin',
    pathMatch: 'full',
    component: SignupComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
