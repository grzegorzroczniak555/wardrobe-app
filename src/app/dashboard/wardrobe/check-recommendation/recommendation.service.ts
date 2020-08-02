import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {AuthService} from '../../../core/auth.service';
import {Recommendation} from '../item.model';
import {Travel} from '../../travels/travel.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  readonly COLLECTION_NAME = 'travels';

  private recommendationsCollection: AngularFirestoreCollection<Travel>;
  private userId: string;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      this.userId = user.uid;
      this.recommendationsCollection = this.afs.collection<Travel>
      (`${this.COLLECTION_NAME}/${this.userId}/${this.COLLECTION_NAME}`);
    });
  }

  async upsert(recommendation: Recommendation, travel: Travel): Promise<DocumentReference | void> {
    const query = this.afs.collectionGroup('travels', ref => ref.where('destination', '==', `${travel.destination}`));
    const promise = await query.get().toPromise();
    const docs = promise.docs;
    if (docs.length > 0) {
      const itemDoc = docs[0];
      const retrievedTravel = itemDoc.data() as Travel;
      retrievedTravel.recommendation.recommendations = recommendation.recommendations;
      retrievedTravel.recommendation.recommendationDate = recommendation.recommendationDate;
      const itemRec = retrievedTravel.recommendation.recommendations.map((obj) => {return Object.assign({}, obj)});
      const rec: Recommendation = {
        recommendations: itemRec,
        recommendationDate: retrievedTravel.recommendation.recommendationDate
       }
      retrievedTravel.recommendation = rec;
      return this.afs.collection(`${this.COLLECTION_NAME}/${this.userId}/${this.COLLECTION_NAME}`).doc(itemDoc.id)
        .update(Object.assign({}, retrievedTravel));
    }
  }
}
