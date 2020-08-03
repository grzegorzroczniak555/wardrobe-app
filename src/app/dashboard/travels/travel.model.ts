import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {Recommendation} from '../wardrobe/item.model';

export class Travel {
  constructor(
    public destination: string,
    public startDate: Timestamp,
    public endDate: Timestamp,
    public id?: string,
    public recommendation?: Recommendation) {}
}
