import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  async onLogin() {
    this.authService.googleLogin();
  }

}
