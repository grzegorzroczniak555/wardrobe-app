import { Travel } from './travel.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private travels: Travel[] = [];

  constructor() { }

private getId(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getTravels(): Observable<Travel[]> {
  return of(this.travels);
}

addTravel(travel: Travel): Observable<Travel> {
  travel.id = this.getId(1, 200);
  this.travels.push(travel);
  return of(travel);
}

}
