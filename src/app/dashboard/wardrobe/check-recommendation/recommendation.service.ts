import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {AuthService} from '../../../core/auth.service';
import {ItemRecommendation, Recommendation} from '../item.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  readonly COLLECTION_NAME = 'recommendations';

  private recommendationsCollection: AngularFirestoreCollection<ItemRecommendation[]>;
  private userId: string;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      this.userId = user.uid;
      this.recommendationsCollection = this.afs.collection<ItemRecommendation[]>
      (`${this.COLLECTION_NAME}/${this.userId}/${this.COLLECTION_NAME}`);
    });
  }

  addRecommendation(recommendation: ItemRecommendation[]): Promise<DocumentReference> {
    return this.recommendationsCollection.add(Object.assign({}, recommendation));
  }
}
