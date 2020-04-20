import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {Travel} from './travel.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  readonly COLLECTION_NAME = 'travels';

  travelsCollection: AngularFirestoreCollection<Travel>;
  public userId: string;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
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

}
