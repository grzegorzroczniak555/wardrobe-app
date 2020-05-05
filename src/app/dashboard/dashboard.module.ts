import { NgModule } from '@angular/core';

import { AddItemComponent } from './wardrobe/add-item/add-item.component';
import { AddTravelComponent } from './travels/add-travel/add-travel.component';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AddItemComponent,
    AddTravelComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    MatSidenavModule,
  ]
})
export class DashboardModule {
}
