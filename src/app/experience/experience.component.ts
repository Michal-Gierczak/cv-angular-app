import { Component } from '@angular/core';

import { Experience } from './experience.model';
import { ExperienceService } from './experience.service';
import { Observable } from 'rxjs';
import { Description } from '.././shared/description.model';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences$: Observable<Experience[]> = this.experienceService.experiences;
  experienceDesc$: Observable<Description> = this.experienceService.experienceDesc;


  constructor(private experienceService: ExperienceService) { }
  }
