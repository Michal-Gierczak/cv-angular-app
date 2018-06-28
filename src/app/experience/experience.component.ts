import { Component, OnInit, Input } from '@angular/core';

import { Experience } from './experience.model';
import { ExperienceService } from './experience.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences$: Observable<{}[]>;
  experienceDesc$: Observable<{}[]>;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experiences$ = this.experienceService.experiences;
    this.experienceDesc$ = this.experienceService.experienceDesc;
    }
  }
