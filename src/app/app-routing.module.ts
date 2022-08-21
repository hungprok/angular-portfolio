import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'home', component: AppComponent },
  { path: '**', component: LandingPageComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
