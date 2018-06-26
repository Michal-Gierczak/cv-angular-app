import { Component, OnInit } from '@angular/core';

import { Education } from './education.model';
import { EducationService } from './education.service';
import { SectionDescriptionService } from '.././shared/section-description.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];
  educationDesc: string = '';

  constructor(private educationService: EducationService, private sectionDescription: SectionDescriptionService) { }

  ngOnInit() {
    this.educationService.getEducations().subscribe(educations => {
      this.educations = educations;
    })
    this.sectionDescription.getSectionDescription().subscribe(section => {
      this.educationDesc = section[0].educations;        
    })

  }

}
