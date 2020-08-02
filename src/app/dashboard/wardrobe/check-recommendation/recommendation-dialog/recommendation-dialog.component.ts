import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Recommendation} from '../../item.model';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Component({
  selector: 'app-recommendation-dialog',
  templateUrl: './recommendation-dialog.component.html',
  styleUrls: ['./recommendation-dialog.component.css']
})
export class RecommendationDialogComponent implements OnInit {

  public recommendationDate: Timestamp;

  constructor(
    public dialogRef: MatDialogRef<RecommendationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recommendation) {
    this.recommendationDate = data.recommendationDate;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
