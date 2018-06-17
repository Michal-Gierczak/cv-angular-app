import { Component, OnInit } from '@angular/core';

import { Skills } from '../skills.model';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {

  skills: Skills[] = [
    new Skills('Web Development', 'Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm.'),
    new Skills("UI\\UX Design", 'Photoshop, Illustrator, Sketch, Axure, XMind, Prototyping, Wireframing, User Research, Usability Testing.'),
    new Skills("Frontend Development", 'HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal, Phonegap / Cordova, Ionic, Foundation, Angular.js.'),
    new Skills("Consulting & SEO Audit", 'Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg.')
  ];

  constructor() {}

  ngOnInit() {
  }

}
