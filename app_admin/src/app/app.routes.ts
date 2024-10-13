import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { AddTripComponent } from './add-trip/add-trip.component';


export const routes: Routes = [
   { path: 'add-trip', component: AddTripComponent},
   { path: '', component: TripListingComponent, pathMatch: 'full'}
];
