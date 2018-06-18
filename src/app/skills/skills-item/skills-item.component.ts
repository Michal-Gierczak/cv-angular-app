import { Component, OnInit, Input } from '@angular/core';

import { Skills } from '../skills.model';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {

  @Input() skills: Skills;

  constructor() {}

  ngOnInit() {
  }

}
