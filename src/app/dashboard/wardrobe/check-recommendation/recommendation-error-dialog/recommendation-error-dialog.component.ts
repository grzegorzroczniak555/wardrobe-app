import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {RecommendationDialogComponent} from '../recommendation-dialog/recommendation-dialog.component';

@Component({
  selector: 'app-recommendation-error-dialog',
  templateUrl: './recommendation-error-dialog.component.html',
  styleUrls: ['./recommendation-error-dialog.component.css']
})
export class RecommendationErrorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RecommendationDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
