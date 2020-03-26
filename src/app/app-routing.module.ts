import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
<<<<<<< HEAD
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
=======
  { path: 'home-page', component: HomePageComponent }
>>>>>>> develop
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
