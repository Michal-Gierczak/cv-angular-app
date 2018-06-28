import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Awards } from './awards.model';
import { Description } from '.././shared/description.model';

@Injectable()

export class AwardsService {

  awardsColletion:AngularFirestoreCollection<Awards>;
  awards: Observable<Awards[]>;

  awardDoc: AngularFirestoreDocument<Description>;
  awardDesc: Observable<Description>;

  constructor(public afs: AngularFirestore) {
    this.awards = this.afs.collection<Awards>('awards', ref => {
      return ref.orderBy('order', 'desc')
    }).valueChanges();
    this.awardDoc = this.afs.doc('descriptions/award');
    this.awardDesc = this.awardDoc.valueChanges();
  }
}
