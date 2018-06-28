import { Component } from '@angular/core';

import { Experience } from './experience.model';
import { ExperienceService } from './experience.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences$: Observable<{}[]> = this.experienceService.experiences;
  experienceDesc$: Observable<{}[]> = this.experienceService.experienceDesc;

  constructor(private experienceService: ExperienceService) { }
  }
