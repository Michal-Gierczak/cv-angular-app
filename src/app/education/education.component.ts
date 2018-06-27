import { Component, OnInit } from '@angular/core';

import { Education } from './education.model';
import { EducationService } from './education.service';
import { SectionDescriptionService } from '.././shared/section-description.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educations$: Observable<Education[]>;
  sectionDescriptions$: Observable<{}>;

  constructor(private educationService: EducationService, private sectionDescription: SectionDescriptionService) { }

  ngOnInit() {
    this.educations$ = this.educationService.getEducations();
    this.sectionDescriptions$ = this.sectionDescription.getSectionDescription();
  }

}
