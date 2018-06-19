import { Component, OnInit } from '@angular/core';

import { Awards } from './awards.model'

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awards: Awards[] = [
    new Awards('The Best Mobile Game', 'BlackBerry Jam Session (Wroclaw, Poland)', 'December 2012', 'B-Logic - Tetris in a puzzle turn-based way'),
    new Awards('Special Jury Prize', 'Poznan Startup Weekend 2012 (Poznan, Poland)', 'November 2012', 'Glow yourself the same color as people with similar interests. We create the device, that will be emitting certain color. The color that will dynamically change dependently on user preferences. On the events in real life situations it’s time consuming activity to meet people that share our interests. We solve this problem by enabling easy way to help people to identify themselves in the crowd.'),
    new Awards('The Best Mobile App', 'HackWro #2 (Wroclaw, Poland)', 'November 2012', 'Developing mobile app for guessing movie title after looking at choosen snapshot.'),
    new Awards('The Best App to Make Life Easier + Special Award', 'Hackfest 2012 (Poznan, Poland)', 'April 2012', 'Developing an app, that will help students and other young people in organizing travelling between cities in small group of friends.'),
    new Awards('Audience Award', 'Hackfest 2011 (Poznan, Poland)', 'October 2011', 'Developing entertainment platform for guessing movie title after looking at choosen snapshot.')
  ]

  constructor() { }

  ngOnInit() {
  }

}
