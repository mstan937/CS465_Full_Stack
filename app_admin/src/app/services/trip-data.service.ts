import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/api/trips';
  getTrips(): Observable<Trip[]> {
    
    return this.http.get<Trip[]>(this.url);
  }


}
