import { Component, OnInit } from '@angular/core';

import { Awards } from './awards.model';
import { AwardsService } from './awards.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awards$: Observable<{}[]>;
  awardDesc$: Observable<{}[]>;

  constructor(private awardsService: AwardsService) { }

  ngOnInit() {
    this.awards$ = this.awardsService.awards;
    this.awardDesc$ = this.awardsService.awardDesc;
  }
}
