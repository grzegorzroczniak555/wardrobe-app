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

  readonly message = 'Travel has been added!';
  travels: Travel[] = [];
  durationActivator = '';
  minDate: Date;

  constructor(public travelService: TravelService,
              private snackBar: MatSnackBar, ) {
              this.minDate = new Date();
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
        this.formDirective.resetForm();
        this.addTravelSnackBar(this.message);
      });
  }

  addTravelSnackBar(message: string) {
    this.snackBar.open(message, this.durationActivator, {
      duration: 2000,
    });
  }
}




