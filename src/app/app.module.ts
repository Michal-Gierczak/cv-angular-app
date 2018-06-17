import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { SkillsComponent } from './content/skills/skills.component';
import { SkillsItemComponent } from './content/skills/skills-item/skills-item.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { ExperienceItemComponent } from './content/experience/experience-item/experience-item.component';
import { EducationComponent } from './content/education/education.component';
import { EducationItemComponent } from './content/education/education-item/education-item.component';
import { AwardsComponent } from './content/awards/awards.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    SkillsItemComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    EducationComponent,
    EducationItemComponent,
    AwardsComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
