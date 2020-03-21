import { TravelService } from './travel.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Travel } from './travel.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {
  travelForm = new FormGroup({
    destination: new FormControl('', [
      Validators.minLength(3),
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
  addMessage = 'Travel has been added!';
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
  }

  getErrorDestinationMessage() {
    if (this.travelForm.get('destination').hasError('required')) {
      return 'You must enter a value';
    }

    if (this.travelForm.get('destination').hasError('minlength')) {
      return 'Not a valid location';
    }
  }

  getErrorStartDateMessage() {
    if (this.travelForm.get('startDate').hasError('required')) {
      return 'You must choose a date';
    }
  }

  getErrorEndDateMessage() {
    if (this.travelForm.get('endDate').hasError('required')) {
      return 'You must choose a date';
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}




