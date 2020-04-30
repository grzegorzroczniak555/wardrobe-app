import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {Item} from './item.model';
import {AuthService} from '../../core/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  public userId: string;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      this.userId = user.uid;
      this.itemsCollection = this.afs.collection<Item>(`wardrobe/${this.userId}/item`);
    });
  }

  getItems(): Observable<Item[]> {
    return this.afs.collection<Item>(`wardrobe/${this.userId}/item`).valueChanges();
  }

  addItem(item: Item): Promise<DocumentReference> {
       return this.itemsCollection.add(Object.assign({}, item));
  }

  updateItem(item: Item) {
    this.afs.collectionGroup('item', ref => ref.where('name', '==', `${item.name}`))
      .get().toPromise().then(snap => {
        snap.forEach(doc => {
            // console.log(doc.data());
            // console.log(doc.id);
            // console.log(snap);
            const oldAmount = (doc.data());
            item.amount = item.amount + oldAmount.amount;
            this.afs.collection(`wardrobe/${this.userId}/item`).doc(doc.id).set(Object.assign({}, item));
        });
        this.addItem(item);
        // this.afs.collection(`wardrobe/${this.userId}/item`).add(Object.assign({}, item));
      });

  }


}
