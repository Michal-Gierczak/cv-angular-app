import { Component } from '@angular/core';
import { Skills } from './skills.model';
import { SkillsService } from './skills.service';
import { Observable } from 'rxjs';
import { Description } from '.././shared/description.model';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {

  skills$: Observable<Skills[]> = this.skillService.skills;
  skillDesc$: Observable<Description> = this.skillService.skillDesc;

    constructor(private skillService: SkillsService) {}
  }
