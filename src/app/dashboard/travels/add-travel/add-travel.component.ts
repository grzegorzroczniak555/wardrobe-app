import {TravelService} from '../travel.service';
import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, FormGroupDirective} from '@angular/forms';
import {Travel} from '../travel.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Recommendation} from '../../wardrobe/item.model';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Component({
  selector: 'app-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.scss']
})
export class AddTravelComponent implements OnInit {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  @Output() setDate: EventEmitter<any> = new EventEmitter();
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
  today: Timestamp;
  minDateForStart: Date;
  minDateForEnd: Date;
  maxDateForEnd: Date;
  showSpinner: boolean = true;
  recommendation: Recommendation = new Recommendation();

  constructor(private travelService: TravelService,
              private snackBar: MatSnackBar) {
    this.minDateForStart = new Date();
    this.minDateForStart.setDate(this.minDateForStart.getDate() + 1);
  }

  ngOnInit(): void {
    this.today = Timestamp.now();
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels().subscribe(travels => {
      this.travels = travels.filter(travel =>
        (travel.startDate.seconds >= this.today.seconds));
    });
    this.showSpinner = false;
  }

  addTravel() {
    const destination = this.travelForm.get('destination').value;
    const startDate = this.travelForm.get('startDate').value;
    const endDate = this.travelForm.get('endDate').value;
    const id = '';
    const recommendation = this.recommendation;
    const dateRec = new Timestamp(new Date().getSeconds(), new Date().getUTCSeconds());
    const itemRec = recommendation.recommendations.map((obj) => {return Object.assign({}, obj)});
    const rec: Recommendation = {
      recommendations: itemRec,
      recommendationDate: dateRec
    }
    const travel = new Travel(destination, startDate, endDate, id, rec);
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

  setMaxDate(date) {
    this.minDateForEnd =  new Date(date);
    this.maxDateForEnd = new Date(date);
    if (date === null) {
      return 0;
    }
    this.maxDateForEnd.setDate(this.maxDateForEnd.getDate() + 4);
  }

  private ShowSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}




