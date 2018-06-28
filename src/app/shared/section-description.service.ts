import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class SectionDescriptionService {

  sectionDescriptionColletion:AngularFirestoreCollection<SectionDesc>;
  sectionDescriptions: Observable<SectionDesc[]>;

  constructor(public afs: AngularFirestore) {
    //this.sectionDescriptions = this.afs.collection('sectionsDescription').valueChanges();
    this.sectionDescriptions = this.afs.collection('sectionsDescription').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as SectionDesc
        data.id = a.payload.doc.id;
        return data;
      });
  }));
  }  
}
interface SectionDesc {
    id?: string;
    experiences: string;
    awards: string;
    skills: string;
    educations: string;
}
