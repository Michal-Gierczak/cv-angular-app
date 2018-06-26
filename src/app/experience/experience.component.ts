import { Component, OnInit } from '@angular/core';

import { Experience } from './experience.model';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
    })
  }

}
