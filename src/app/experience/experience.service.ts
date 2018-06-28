import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Experience } from './experience.model';
import { Description } from '.././shared/description.model';

@Injectable()
export class ExperienceService {

  experiencesColletion:AngularFirestoreCollection<Experience>;
  experiences: Observable<{}[]>;

  experienceDoc: AngularFirestoreDocument<Description>;
  experienceDesc: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.experiences = this.afs.collection('experiences', ref => {
      return ref.orderBy('order', 'desc')
    }).valueChanges();
    this.experienceDoc = this.afs.doc('descriptions/experience');
    this.experienceDesc = this.experienceDoc.valueChanges();
  }
}
