import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Recommendation} from '../../wardrobe/item.model';
import {RecommendationDialogComponent} from '../../wardrobe/check-recommendation/recommendation-dialog/recommendation-dialog.component';

@Component({
  selector: 'app-about-us-dialog',
  templateUrl: './about-us-dialog.component.html',
  styleUrls: ['./about-us-dialog.component.css']
})
export class AboutUsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RecommendationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Recommendation) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
