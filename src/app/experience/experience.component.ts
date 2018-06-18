import { Component, OnInit } from '@angular/core';

import { Experience } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    new Experience('Senior Front End Developer', 'Coresystems AG (via MIJA Software)', 'October, 2017 — Present',
     `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta eum eveniet facere facilis labore
     laboriosam numquam possimus voluptates? Atque autem blanditiis eaque magnam porro quod similique sint soluta
     voluptas!`,
     `https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAfrAAAAJGU5MzI2ZGYyLWRlMWEtNDliYS1iMTU5LTk5NTFhNjM0YzZhNQ.png`),
    new Experience('Senior Front End Developer', 'Credit Suisse (Poland) Sp. z o.o. (via Luxoft)', 'August, 2015 — Present',
      'Developing suite of design tools and hosting services that provides hosting and publication of rich reports and dashboards.',
      'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAXtAAAAJGRlZDA5YzIwLTVjYjYtNGRhYS04MDU2LTQzNGYxMzllNjU3MQ.png'),
    new Experience('Front End Developer', 'BLStream SA / intive GmbH (via RINF / Altimi)', 'August, 2014 — August, 2015', 'Leading a small team on a variety of development projects and delivering solutions to meet and exceed clients’ briefs.',
      'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAi4AAAAJGYzOGQ0MGRlLTU0ZDQtNGExYS1iYTg4LTBmOWI0NmFjNWY4Mg.png'),
    new Experience('Front End Developer', 'LiveChat, Inc. / LIVECHAT Software SA', 'August, 2013 — August, 2014',
      'Revamped web application security applications, minimizing hacker attacks from 2.3% to 0.02%.',
      'https://media.licdn.com/mpr/mpr/shrink_100_100/p/6/000/210/391/1228165.png')
  ]
  constructor() { }

  ngOnInit() {
  }

}
