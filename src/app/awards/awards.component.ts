import { Component, OnInit } from '@angular/core';

import { Awards } from './awards.model';
import { AwardsService } from './awards.service';
import { SectionDescriptionService } from '.././shared/section-description.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awards$: Observable<Awards[]>;
  sectionDescriptions$: Observable<{}>;

  constructor(private awardsService: AwardsService, private sectionDescription: SectionDescriptionService) { }

  ngOnInit() {
    this.awards$ = this.awardsService.getAwards();
    this.sectionDescriptions$ = this.sectionDescription.sectionDescriptions;

  }

}
