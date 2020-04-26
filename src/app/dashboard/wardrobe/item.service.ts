import { Injectable } from '@angular/core';
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

}
