import { Component, OnInit } from '@angular/core';

import { Experience } from './experience.model';
import { ExperienceService } from './experience.service';
import { SectionDescriptionService } from '.././shared/section-description.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];
  expDesc: string = "";

  constructor(private experienceService: ExperienceService, private sectionDescription: SectionDescriptionService) { }

  ngOnInit() {
    this.experienceService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
    })
    this.sectionDescription.getSectionDescription().subscribe(section => {
      this.expDesc = section[0].experiences;
    })
  }
}
