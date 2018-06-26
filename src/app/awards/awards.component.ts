import { Component, OnInit } from '@angular/core';

import { Awards } from './awards.model';
import { AwardsService } from './awards.service';
import { SectionDescriptionService } from '.././shared/section-description.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awards: Awards[] = [];
  awardsDesc: string = "";

  constructor(private awardsService: AwardsService, private sectionDescription: SectionDescriptionService) { }

  ngOnInit() {
    this.awardsService.getAwards().subscribe(awards => {
      this.awards = awards;
    })
    this.sectionDescription.getSectionDescription().subscribe(section => {
      this.awardsDesc = section[0].awards;
    })
  }

}
