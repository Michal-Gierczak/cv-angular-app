import { Component, OnInit } from '@angular/core';

import { Education } from './education.model';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];
  educationDesc: string = '';

  constructor(private educationService: EducationService) { }

  ngOnInit() {
    this.educationService.getEducations().subscribe(educations => {
      this.educations = educations;
      for(let education of this.educations) {
        if (education['educationDesc']) {
          this.educationDesc = education.educationDesc;
        }
      }
    })
  }

}
