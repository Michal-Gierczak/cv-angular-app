import { Component, OnInit, Input } from '@angular/core';

import { Education } from '../education.model'

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  @Input() education: Education;

  constructor() { }

  ngOnInit() {
  }

}
