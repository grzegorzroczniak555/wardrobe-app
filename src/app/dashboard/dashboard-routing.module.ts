import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddItemComponent } from './wardrobe/add-item/add-item.component';
import { AddTravelComponent } from './travels/add-travel/add-travel.component';
import { CheckRecommendationComponent } from './wardrobe/check-recommendation/check-recommendation.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: 'travels',
        children: [
          {
            path: 'add',
            component: AddTravelComponent
          }
        ]
      },
      {
        path: 'items',
        children: [
          {
            path: 'add',
            component: AddItemComponent
          }
        ],
      },
      {
        path: 'recommendation',
        children: [
          {
            path: 'check',
            component: CheckRecommendationComponent
          }
        ],
      }
    ]
  },
  {
    path: '',
    redirectTo: 'travels',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
