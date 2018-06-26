import { Component, OnInit } from '@angular/core';
import { Skills } from './skills.model';
import { SkillsService } from './skills.service';
import { SectionDescriptionService } from '.././shared/section-description.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {

  skills: Skills[] = [];
  skillsDesc: string = '';

    constructor(private skillService: SkillsService, private sectionDescription: SectionDescriptionService) {}

    ngOnInit() {
      this.skillService.getSkills().subscribe(skills => {
        this.skills = skills;
      })
      this.sectionDescription.getSectionDescription().subscribe(section => {
        this.skillsDesc = section[0].skills;        
      })
    }
  }
