import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output()
  evenTask = new EventEmitter<string>();


  constructor() {}

  drawer.toggle() {
    this.evenTask.emit();
  }


}
