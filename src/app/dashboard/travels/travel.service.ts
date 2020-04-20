import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Travel} from './travel.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../core/auth.service';
import { config } from './add-travel/app.config';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private travels: Observable<any[]>;
  travelsCollection: AngularFirestoreCollection<Travel>;
  public userId: string;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      this.userId = user.uid;
      this.travelsCollection = this.afs.collection<Travel>(config.collection_endpoint);
    });
  }

  getTravels() {
    this.travels = this.afs.collection(config.collection_endpoint).valueChanges();
    return this.travels;
  }

  addTravel(travel: Travel): void {
    this.travelsCollection.add(Object.assign({}, travel));
  }

}
