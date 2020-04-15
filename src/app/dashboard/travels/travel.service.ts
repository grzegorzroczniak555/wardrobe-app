import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Travel} from './travel.model';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AuthService} from '../../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  readonly COLLECTION_NAME = 'travels';

  private travels: Observable<Travel[]>;
  travelsCollection: AngularFirestoreCollection<Travel>;
  public userId: string;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      this.userId = user.uid;
      this.travelsCollection = this.afs.collection<Travel>(`${this.COLLECTION_NAME}/${this.userId}/travels`);
    });
  }

  getTravels() {
    this.travels = this.travelsCollection.valueChanges();
    return this.travels;
  }

  addTravel(travel: Travel): void {
    this.travelsCollection.add(Object.assign({}, travel));
  }

}
