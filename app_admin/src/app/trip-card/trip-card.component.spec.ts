import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';

@Component({
selector: 'app-trip-card',
standalone: true,
imports: [CommonModule],
templateUrl: './trip-card.component.html',
styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit {
@Input('trip') trip: any;
constructor() {}
ngOnInit(): void {
}
}