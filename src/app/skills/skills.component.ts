import { Component, OnInit } from '@angular/core';
import { Skills } from './skills.model';
import { SkillsService } from './skills.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {

  skills$: Observable<{}[]>;
  skillDesc$: Observable<{}[]>;

    constructor(private skillService: SkillsService) {}

    ngOnInit() {
      this. skills$ = this.skillService.skills;
      this.skillDesc$ = this.skillService.skillDesc;
    }
  }
