import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export class Travel {
  constructor(
    public destination: string,
    public startDate: Timestamp,
    public endDate: Timestamp) {}
}
