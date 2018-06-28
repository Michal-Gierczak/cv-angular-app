import { Component, OnInit } from '@angular/core';
import { Skills } from './skills.model';
import { SkillsService } from './skills.service';
import { SectionDescriptionService } from '.././shared/section-description.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {

  skills$: Observable<Skills[]>;
  sectionDescriptions$: Observable<{}>;

    constructor(private skillService: SkillsService, private sectionDescription: SectionDescriptionService) {}

    ngOnInit() {
      this. skills$ = this.skillService.getSkills();
      this.sectionDescriptions$ = this.sectionDescription.sectionDescriptions;
    }
  }
