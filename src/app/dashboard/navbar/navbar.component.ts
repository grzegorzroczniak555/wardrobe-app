import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {AboutUsDialogComponent} from './about-us-dialog/about-us-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() drawerToggle = new EventEmitter<void>();

  calendarIsEnabled = false;

  constructor(public authService: AuthService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onDrawerToggle() {
    this.drawerToggle.emit();
  }

  calendarStatusChange() {
    this.calendarIsEnabled = !this.calendarIsEnabled;
  }

  openDialog(): void {
    this.dialog.open(AboutUsDialogComponent, {
      width: '350px'
    });
  }
}
