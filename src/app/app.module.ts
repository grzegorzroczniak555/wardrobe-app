import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    SharedModule,
    LayoutModule,
    MatExpansionModule,
    RouterModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
