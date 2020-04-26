import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AddTravelComponent} from './travels/add-travel/add-travel.component';
import {AddItemComponent} from './wardrobe/add-item/add-item.component';

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
        path: 'wardrobe',
        component: AddItemComponent
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
