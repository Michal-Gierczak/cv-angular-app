import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Awards } from './awards.model';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {

  awardsColletion:AngularFirestoreCollection<Awards>;
  awards: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.awards = this.afs.collection('awards', ref => {
      return ref.orderBy('order', 'desc')
    }).valueChanges();
  }

  getAwards() {
    return this.awards;
  }
}
