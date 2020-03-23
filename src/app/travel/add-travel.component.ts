import { TravelService } from './travel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Travel } from './travel.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {
  @ViewChild('pickerStart') pickerStart: MatDatepicker<Date>;
  travelForm = new FormGroup({
    destination: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.required
    ]),
    startDate: new FormControl('', [
      Validators.required,
    ]),
    endDate: new FormControl('', [
      Validators.required,
    ])
  });

  travels: Travel[] = [];
  readonly message = 'Travel has been added!';
  action = '';

  constructor(public travelService: TravelService,
              private snackBar: MatSnackBar) { }

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
    const startDate = this.travelForm.get('startDate').value;
    const endDate = this.travelForm.get('endDate').value;
    const travel = new Travel(destination, startDate, endDate);
    this.travelService.addTravel(travel)
      .subscribe(() => {
        this.getTravels();
      });
    this.travelForm.reset();
    this.addTravelSnackBar(this.message, this.action);
  }

  addTravelSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}




