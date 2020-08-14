import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item, ItemRecommendation, Recommendation} from '../../item.model';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';
import {ItemService} from '../../item.service';

@Component({
  selector: 'app-recommendation-dialog',
  templateUrl: './recommendation-dialog.component.html',
  styleUrls: ['./recommendation-dialog.component.css']
})
export class RecommendationDialogComponent implements OnInit {

  public recommendationDate: Timestamp;
  items: Item[] = [];

  constructor(
    public dialogRef: MatDialogRef<RecommendationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recommendation,
    private itemService: ItemService) {
    this.recommendationDate = data.recommendationDate;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(ownedItems => {
      this.items = ownedItems;
    });
  }

  compareRecommendationWithWardrobe(recommendation: ItemRecommendation, items: Item[]) {
    const elExist = items.some( el => { return el.name === recommendation.name && el.amount >= recommendation.recommendedAmount});
    return elExist;
}

}
