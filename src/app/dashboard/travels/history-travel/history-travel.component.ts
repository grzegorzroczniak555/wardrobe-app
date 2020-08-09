import {Component, OnInit} from '@angular/core';
import {Travel} from '../travel.model';
import {TravelService} from '../travel.service';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Component({
  selector: 'app-history-travel',
  templateUrl: './history-travel.component.html',
  styleUrls: ['./history-travel.component.css']
})
export class HistoryTravelComponent implements OnInit {

  showSpinner: boolean = true;
  travels: Travel[] = [];
  today: Timestamp;

  constructor(private travelService: TravelService) {
  }

  ngOnInit(): void {
    this.today = Timestamp.now();
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels().subscribe(travels => {
      this.travels = travels.filter(travel =>
        (travel.startDate.seconds < this.today.seconds));
    });
    this.showSpinner = false;
  }
}
