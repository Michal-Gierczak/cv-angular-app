import { Component, OnInit, Input } from '@angular/core';

import {Experience} from '../experience.model'

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experience: Experience;

  constructor() { }

  ngOnInit() {
  }

}
