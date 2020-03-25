import { TravelService } from './travel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Travel } from './travel.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {
    @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
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
  durationActivator = '';
  minDate: Date;

  constructor(public travelService: TravelService,
              private snackBar: MatSnackBar, ) {
                const currentYear = new Date().getFullYear();
                const currentMonth = new Date().getMonth();
                const currentDay = new Date().getDate();
                this.minDate = new Date(currentYear, currentMonth, currentDay);
               }

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
    this.formDirective.resetForm();
    this.addTravelSnackBar(this.message, this.durationActivator);
  }

  addTravelSnackBar(message: string, durationActivator: string) {
    this.snackBar.open(message, durationActivator, {
      duration: 2000,
    });
  }
}




