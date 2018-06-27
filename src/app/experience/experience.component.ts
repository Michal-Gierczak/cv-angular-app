import { Component, OnInit } from '@angular/core';

import { Experience } from './experience.model';
import { ExperienceService } from './experience.service';
import { SectionDescriptionService } from '.././shared/section-description.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences$: Observable<Experience[]>;
  sectionDescriptions$: Observable<{}>;

  constructor(private experienceService: ExperienceService, private sectionDescription: SectionDescriptionService) { }

  ngOnInit() {
    this.experiences$ = this.experienceService.getExperiences();
    this.sectionDescriptions$ = this.sectionDescription.getSectionDescription();
    }
  }
