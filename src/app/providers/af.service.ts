import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

import * as firebase from 'firebase/app';
 

@Injectable()
export class AfService {
  user: Observable<firebase.User>;
  constructor(public afAuth : AngularFireAuth){
    this.user=afAuth.authState;
  }

  loginWithGoogle(){
    const provider= new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);

  }
  logout(){
    this.afAuth.auth.signOut();
  }

}
