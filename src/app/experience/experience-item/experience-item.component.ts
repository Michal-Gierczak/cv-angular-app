import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

import {Experience} from '../experience.model';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

  @Input('experiences') experiences: Experience;
  imageUrl: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    const ref = this.storage.ref(this.experiences.image);
    this.imageUrl = ref.getDownloadURL();
    }

  }
