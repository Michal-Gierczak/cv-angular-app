import { Component, OnInit } from '@angular/core';

import { Education } from './education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education[] = [
    new Education('Google Developer Training', 'Google', 'Apr, 2015 — May, 2015', 'Learn to use App Engine, Google\'s Platform as a Service, to build the backend for web apps that scale not only as your user base grows but as request volumes peaks with sudden demand.'),
    new Education('Software Development', 'Boston University','Jan, 2005 — May, 2009', 'BSc (Hons) in Software Development. Outstanding Academic Achievement Award.')
  ]

  constructor() { }

  ngOnInit() {
  }

}
