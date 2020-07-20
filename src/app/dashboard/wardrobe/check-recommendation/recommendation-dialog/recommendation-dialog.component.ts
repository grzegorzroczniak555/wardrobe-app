import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Recommendation} from '../../item.model';

@Component({
  selector: 'app-recommendation-dialog',
  templateUrl: './recommendation-dialog.component.html',
  styleUrls: ['./recommendation-dialog.component.css']
})
export class RecommendationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RecommendationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recommendation) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
