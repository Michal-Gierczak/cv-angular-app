import { Component, OnInit } from '@angular/core';

import { Education } from './education.model';
import { EducationService } from './education.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educations$: Observable<{}[]>;
  educationDesc$: Observable<{}[]>;

  constructor(private educationService: EducationService) { }

  ngOnInit() {
    this.educations$ = this.educationService.educations;
    this.educationDesc$ = this.educationService.educationDesc;
  }
}
