import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  {
    path: 'dashboard', children: [
      { path: '', pathMatch: 'full', component: DashboardComponent },
    ]
  },
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
