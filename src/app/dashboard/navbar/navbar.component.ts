import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() drawerToggle = new EventEmitter<void>();

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onDrawerToggle() {
    this.drawerToggle.emit();
  }

}
