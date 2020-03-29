import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  private googleProvider: GoogleAuthProvider;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.user = this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          }
          return of(null);
        })
      );
  }

  signOut() {
    this.afAuth.signOut()
      .then((res) => console.log(res))
      .catch(err => console.error(err));
    this.router.navigate(['/']);
  }

  googleLogin() {
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(this.googleProvider);
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
      .then((credentials) => {
        this.updateUserData(credentials.user)
          .then((res) => {
            console.log('Logged in!');
            this.router.navigate(['/dashboard']);
          })
          .catch((err) => console.log(err));
      });
  }

  private updateUserData(user: User): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }
}
