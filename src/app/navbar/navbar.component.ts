import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Output()
uploaded = new EventEmitter<string>();

  constructor() {}

drawerToggle() {
  this.uploaded.emit();
}

}
