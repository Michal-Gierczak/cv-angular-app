import { Component } from '@angular/core';
import { Skills } from './skills.model';
import { SkillsService } from './skills.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {

  skills$: Observable<{}[]> = this.skillService.skills;
  skillDesc$: Observable<{}[]> = this.skillService.skillDesc;

    constructor(private skillService: SkillsService) {}
  }
