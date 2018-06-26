import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Education } from './education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educationColletion:AngularFirestoreCollection<Education>;
  educations: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
    this.educations = this.afs.collection('educations').valueChanges();
  }

  getEducations() {
    return this.educations;
  }
}
