import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsItemComponent } from './skills/skills-item/skills-item.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceItemComponent } from './experience/experience-item/experience-item.component';
import { EducationComponent } from './education/education.component';
import { EducationItemComponent } from './education/education-item/education-item.component';
import { AwardsComponent } from './awards/awards.component';
import { FooterComponent } from './footer/footer.component';
import { AwardsItemComponent } from './awards/awards-item/awards-item.component';

import { ExperienceService } from './experience/experience.service';
import { AwardsService } from './awards/awards.service';
import { EducationService } from './education/education.service';
import { SkillsService } from './skills/skills.service';

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
    AwardsItemComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [ExperienceService, AwardsService, EducationService, SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
