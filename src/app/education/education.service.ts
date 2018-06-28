import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Education } from './education.model';
import { Description } from '.././shared/description.model';

@Injectable()
export class EducationService {

  educationColletion:AngularFirestoreCollection<Education>;
  educations: Observable<Education[]>;

  educationDoc: AngularFirestoreDocument<Description>;
  educationDesc: Observable<Description>;

  constructor(public afs: AngularFirestore) {
    this.educations = this.afs.collection<Education>('educations', ref => {
      return ref.orderBy('order', 'desc')
    }).valueChanges();
    this.educationDoc = this.afs.doc('descriptions/experience');
    this.educationDesc = this.educationDoc.valueChanges();
  }
}
