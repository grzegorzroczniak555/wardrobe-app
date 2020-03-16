import { TravelService } from './../travel.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Travel } from '../travel/travel';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  travelForm = new FormGroup({
    destination: new FormControl(''),
    date: new FormControl(''),
  });

  travels: Travel[] = [];

  constructor(public travelService: TravelService) { }

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels()
      .subscribe(travels => {
        this.travels = travels;
      });
  }

  addTravel() {
    const destination = this.travelForm.get('destination').value;
    const date = this.travelForm.get('date').value;
    const travel = new Travel(destination, date);
    this.travelService.addTravel(travel)
      .subscribe(() => {
        this.getTravels();
      });
    this.travelForm.reset();
    console.log(this.travels);
  }

}
