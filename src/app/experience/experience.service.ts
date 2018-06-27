import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Experience } from './experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiencesColletion:AngularFirestoreCollection<Experience>;
  experiences: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
    this.experiences = this.afs.collection('experiences', ref => {
      return ref.orderBy('order', 'desc')
    }).valueChanges();
  }

  getExperiences() {
    return this.experiences;
  }
}
