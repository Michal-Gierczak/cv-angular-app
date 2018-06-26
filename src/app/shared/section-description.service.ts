import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionDescriptionService {

  sectionDescriptionColletion:AngularFirestoreCollection<{}>;
  sectionDescriptions: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.sectionDescriptions = this.afs.collection('sectionsDescription').valueChanges();
  }

  getSectionDescription() {
    return this.sectionDescriptions;
  }
}
