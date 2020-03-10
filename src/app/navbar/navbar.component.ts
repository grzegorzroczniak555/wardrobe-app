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


drawToggle(){
  this.uploaded.emit();
  console.log('method works');
}

}
