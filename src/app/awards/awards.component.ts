import { Component } from '@angular/core';

import { Awards } from './awards.model';
import { AwardsService } from './awards.service';
import { Observable } from 'rxjs';
import { Description } from '.././shared/description.model';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent {

  awards$: Observable<Awards[]> = this.awardsService.awards;
  awardDesc$: Observable<Description> = this.awardsService.awardDesc;

  constructor(private awardsService: AwardsService) {}
}
