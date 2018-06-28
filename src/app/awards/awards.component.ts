import { Component } from '@angular/core';

import { Awards } from './awards.model';
import { AwardsService } from './awards.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent {

  awards$: Observable<{}[]> = this.awardsService.awards;
  awardDesc$: Observable<{}[]> = this.awardsService.awardDesc;

  constructor(private awardsService: AwardsService) {}
}
