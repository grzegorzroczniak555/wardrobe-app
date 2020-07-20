import { NgModule } from '@angular/core';

import { AddItemComponent } from './wardrobe/add-item/add-item.component';
import { AddTravelComponent } from './travels/add-travel/add-travel.component';
import { CheckRecommendationComponent } from './wardrobe/check-recommendation/check-recommendation.component';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RecommendationDialogComponent } from './wardrobe/check-recommendation/recommendation-dialog/recommendation-dialog.component';

@NgModule({
  declarations: [
    AddItemComponent,
    AddTravelComponent,
    CheckRecommendationComponent,
    DashboardComponent,
    NavbarComponent,
    RecommendationDialogComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    MatSidenavModule,
  ]
})
export class DashboardModule {
}
