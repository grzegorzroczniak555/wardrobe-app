import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference} from '@angular/fire/firestore';
import {Item} from './item.model';
import {AuthService} from '../../core/auth.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Travel} from '../travels/travel.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemDoc: AngularFirestoreDocument<Travel>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  private COLLECTION_NAME: string;
  private userId: string;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      this.userId = user.uid;
      this.COLLECTION_NAME = `wardrobe/${this.userId}/item`;
      this.itemsCollection = this.afs.collection<Item>(this.COLLECTION_NAME, ref => ref.orderBy('name', 'asc'));
    });
  }

  getItems(): Observable<Item[]> {
    return this.itemsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return {
            name: data.name,
            amount: data.amount,
            id: data.id};
        });
      }));
  }

  async upsert(item: Item): Promise<DocumentReference | void> {
    const query = this.afs.collectionGroup('item', ref => ref.where('name', '==', `${item.name}`));
    const promise = await query.get().toPromise();
    const docs = promise.docs;
    if (docs.length > 0) {
      const itemDoc = docs[0];
      const retrievedItem = itemDoc.data() as Item;
      retrievedItem.amount += item.amount;
      return this.afs.collection(this.COLLECTION_NAME).doc(itemDoc.id).update(Object.assign({}, retrievedItem));
    } else {
      return this.itemsCollection.add(Object.assign({}, item));
    }
  }

  deleteItem(item: Item) {
    item.amount --;
    if (item.amount > 0) {
      return this.afs.doc(`${this.COLLECTION_NAME}/${item.id}`).update(Object.assign({}, item));
    } else {
      return this.afs.doc(`${this.COLLECTION_NAME}/${item.id}`).delete();
    }
  }


}
