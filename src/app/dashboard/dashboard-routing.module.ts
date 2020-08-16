import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddItemComponent } from './wardrobe/add-item/add-item.component';
import { AddTravelComponent } from './travels/add-travel/add-travel.component';
import { CheckRecommendationComponent } from './wardrobe/check-recommendation/check-recommendation.component';
import { DashboardComponent } from './dashboard.component';
import { ErrorComponent } from '../error-page/error.component';
import { HistoryTravelComponent } from './travels/history-travel/history-travel.component';
import {AuthGuard} from '../core/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: 'travels',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'add',
            component: AddTravelComponent
          }
        ]
      },
      {
        path: 'items',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'add',
            component: AddItemComponent
          }
        ],
      },
      {
        path: 'recommendations',
        canActivate: [AuthGuard],
        component: CheckRecommendationComponent
      },
      {
        path: 'history',
        canActivate: [AuthGuard],
        component: HistoryTravelComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'travels',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
