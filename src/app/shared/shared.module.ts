import { NgModule } from '@angular/core';

import { IncrementInputComponent } from '../dashboard/wardrobe/increment-input/increment-input.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    IncrementInputComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    IncrementInputComponent,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule {
}
