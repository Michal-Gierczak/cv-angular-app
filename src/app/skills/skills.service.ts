import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Skills } from './skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillsColletion:AngularFirestoreCollection<Skills>;
  skills: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
    this.skills = this.afs.collection('skills').valueChanges();
  }

  getSkills() {
    return this.skills;
  }
}
