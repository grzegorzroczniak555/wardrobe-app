import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {Item} from './item.model';
import {AuthService} from '../../core/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private COLLECTION_NAME: string;
  private userId: string;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      this.userId = user.uid;
      this.COLLECTION_NAME = `wardrobe/${this.userId}/item`;
      this.itemsCollection = this.afs.collection<Item>(this.COLLECTION_NAME);
    });
  }

  getItems(): Observable<Item[]> {
    return this.afs.collection<Item>(this.COLLECTION_NAME).valueChanges();
  }

  async upsert(item: Item) {
    const query = this.afs.collectionGroup('item', ref => ref.where('name', '==', `${item.name}`));
    const promise = await query.get().toPromise();
    const docs = promise.docs;
    if (docs.length > 0) {
      const itemDoc = docs[0];
      const retrievedItem = itemDoc.data() as Item;
      retrievedItem.amount += item.amount;
      return this.afs.collection(this.COLLECTION_NAME).doc(itemDoc.id).update(Object.assign({}, retrievedItem));
    } else {
      return await this.itemsCollection.add(Object.assign({}, item));
    }
  }


}
