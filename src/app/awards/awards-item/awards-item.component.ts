import { Component, OnInit, Input } from '@angular/core';

import { Awards } from '../awards.model';

@Component({
  selector: 'app-awards-item',
  templateUrl: './awards-item.component.html',
  styleUrls: ['./awards-item.component.scss']
})
export class AwardsItemComponent implements OnInit {

  @Input() awards: Awards;

  constructor() { }

  ngOnInit() {
  }

}
