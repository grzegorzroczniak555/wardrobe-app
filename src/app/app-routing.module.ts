import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'main-page', component: MainPageComponent},
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
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
