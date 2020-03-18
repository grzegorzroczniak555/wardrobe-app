import { TravelService } from './../travel.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Travel } from '../travel/travel';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  travelForm = new FormGroup({
    destination: new FormControl('', [
      Validators.minLength(1),
    ]),
    date: new FormControl('', [
      Validators.required,
    ])
  });

  travels: Travel[] = [];

  constructor(public travelService: TravelService,
              private dialog: MatDialog ) { }

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
  }

  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }

}
