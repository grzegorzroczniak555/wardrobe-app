import { NgModule } from '@angular/core';

import { AddTravelComponent } from './travels/add-travel/add-travel.component';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AddTravelComponent,
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    MatSidenavModule,
  ]
})
export class DashboardModule {
}
