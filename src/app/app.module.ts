import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
=======
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
>>>>>>> develop


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MainPageComponent,
    DashboardComponent,
    NavbarComponent
=======
    HomePageComponent,
    MainPageComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
<<<<<<< HEAD
    LayoutModule,
    MatExpansionModule,
    RouterModule,
=======
    MatTooltipModule
>>>>>>> develop
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
