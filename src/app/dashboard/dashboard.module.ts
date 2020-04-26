import { NgModule } from '@angular/core';

import { AddTravelComponent } from './travels/add-travel/add-travel.component';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AddItemComponent } from './wardrobe/add-item/add-item.component';
import { IncrementInputComponent } from './wardrobe/increment-input/increment-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTravelComponent,
    DashboardComponent,
    NavbarComponent,
    AddItemComponent,
    IncrementInputComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    SharedModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule
  ]
})
export class DashboardModule {
}
