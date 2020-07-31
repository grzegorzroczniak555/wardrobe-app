import {TravelService} from '../travel.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, FormGroupDirective} from '@angular/forms';
import {Travel} from '../travel.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.scss']
})
export class AddTravelComponent implements OnInit {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  readonly successAddNotificationMessage = 'Travel has been added!';
  readonly successDeleteNotificationMessage = 'Travel has been deleted!';
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
  minDate: Date;

  constructor(private travelService: TravelService,
              private snackBar: MatSnackBar) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels().subscribe(travels => {
      this.travels = travels;
    });
  }

  addTravel() {
    const destination = this.travelForm.get('destination').value;
    const startDate = this.travelForm.get('startDate').value;
    const endDate = this.travelForm.get('endDate').value;
    const id = '';
    const travel = new Travel(destination, startDate, endDate, id);
    this.travelService.addTravel(travel).then(() => {
      this.formDirective.resetForm();
      this.ShowSnackBar(this.successAddNotificationMessage);
    });
  }

  deleteTravel(travel: Travel) {
    this.travelService.deleteTravel(travel.id).then(() => {
      this.ShowSnackBar(this.successDeleteNotificationMessage);
    });
  }

  private ShowSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}




