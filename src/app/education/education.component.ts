import { Component } from '@angular/core';

import { Education } from './education.model';
import { EducationService } from './education.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educations$: Observable<{}[]> = this.educationService.educations;
  educationDesc$: Observable<{}[]> = this.educationService.educationDesc;

  constructor(private educationService: EducationService) { }
}
