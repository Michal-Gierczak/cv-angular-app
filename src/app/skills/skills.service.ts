import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Skills } from './skills.model';
import { Description } from '.././shared/description.model';

@Injectable()
export class SkillsService {

  skillsColletion:AngularFirestoreCollection<Skills>;
  skills: Observable<{}[]>;

  skillDoc: AngularFirestoreDocument<Description>;
  skillDesc: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.skills = this.afs.collection('skills', ref => {
      return ref.orderBy('order', 'asc')
    }).valueChanges();
    this.skillDoc = this.afs.doc('descriptions/experience');
    this.skillDesc = this.skillDoc.valueChanges();
  }
}
