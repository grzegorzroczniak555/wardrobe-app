import { HomeComponent } from './home-page/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main-page/main.component';
import { AuthGuard } from './core/auth.guard';
import {ConnectionFailedComponent} from './connection-failed-page/connection-failed.component';

const routes: Routes = [
  {path: 'home-page', component: HomeComponent},
  {path: 'main-page', component: MainComponent},
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', component: DashboardComponent},
    ]
  },
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  },
  {
    path: 'connection-failed',
    pathMatch: 'full',
    component: ConnectionFailedComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
