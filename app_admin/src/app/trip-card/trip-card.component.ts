import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { Router} from '@angular/router';
import { trips } from '../data/trips';




@Component({
selector: 'app-trip-card',
standalone: true,
imports: [CommonModule],
templateUrl: './trip-card.component.html',
styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

@Input('trip') trip: any;
constructor(private router: Router) {}


ngOnInit(): void {
}

public editTrip(trip: Trip) {

  localStorage.removeItem('tripCode');
  localStorage.setItem('tripCode', trip.code);
  this.router.navigate(['edit-trip']);
}
}