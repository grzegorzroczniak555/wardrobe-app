import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import {TravelService} from './travels/travel.service';
import {Travel} from './travels/travel.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  travels: Travel[] = [];

  constructor(private breakpointObserver: BreakpointObserver,
              public travelService: TravelService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  drawerToggle() {
    this.sidenav.toggle();
  }

  getTravels() {
    this.travelService.getTravels().
    subscribe(travels => {
      this.travels = travels;
    });
  }

}
