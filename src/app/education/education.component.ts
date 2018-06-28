import { Component } from '@angular/core';

import { Education } from './education.model';
import { EducationService } from './education.service';
import { Observable } from 'rxjs';
import { Description } from '.././shared/description.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educations$: Observable<Education[]> = this.educationService.educations;
  educationDesc$: Observable<Description> = this.educationService.educationDesc;

  constructor(private educationService: EducationService) { }
}
