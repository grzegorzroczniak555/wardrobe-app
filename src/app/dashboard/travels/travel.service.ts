import {AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Travel} from './travel.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../core/auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  readonly COLLECTION_NAME = 'travels';

  itemDoc: AngularFirestoreDocument<Travel>;
  private travelsCollection: AngularFirestoreCollection<Travel>;
  private userId: string;
  travels: Observable<Travel[]>

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    this.travels = this.afs.collection(`${this.COLLECTION_NAME}/${this.userId}/${this.COLLECTION_NAME}`).snapshotChanges().pipe(
      map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Travel;
        data.id = a.payload.doc.id;
        console.log(data);
        return Object.assign({}, data);
      });
    }))
    this.authService.getUser().subscribe(user => {
      this.userId = user.uid;
      this.travelsCollection = this.afs.collection<Travel>(`${this.COLLECTION_NAME}/${this.userId}/${this.COLLECTION_NAME}`);
    });
  }

  getTravels(): Observable<Travel[]> {
    return this.afs.collection<Travel>(`${this.COLLECTION_NAME}/${this.userId}/${this.COLLECTION_NAME}`).valueChanges();
  }

  addTravel(travel: Travel): Promise<DocumentReference> {
    return this.travelsCollection.add(Object.assign({}, travel));
  }

  deleteTravel(travel: Travel) {
    console.log(travel.id);
    this.itemDoc = this.afs.doc(`${this.COLLECTION_NAME}/${this.userId}/${this.COLLECTION_NAME}/${travel.id}`);
    this.itemDoc.delete();
  }

}
