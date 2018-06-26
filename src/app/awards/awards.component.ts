import { Component, OnInit } from '@angular/core';

import { Awards } from './awards.model';
import { AwardsService } from './awards.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awards: Awards[] = [];
  awardsDesc: string = "";

  constructor(private awardsService: AwardsService) { }

  ngOnInit() {
    this.awardsService.getAwards().subscribe(awards => {
      this.awards = awards;
      for(let award of this.awards) {
        if (award['awardsDesc']) {
          this.awardsDesc = award.awardsDesc;
        }
      }
    })
  }

}
