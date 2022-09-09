import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizeToHtmlPipe } from '../../globals/pipes/sanitize-to-html.pipe';
import { EmailCardComponent } from './components/email-card/email-card.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ShortInfoComponent } from './components/short-info/short-info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BagPackComponent } from './components/tech-tools/bag-pack.component';
import { TechToolsComponent } from './components/tech-tools/tech-tools.component';
import { TechnoCardComponent } from './components/tech-tools/techno-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ShortInfoComponent,
    SanitizeToHtmlPipe,
    TechToolsComponent,
    MainContentComponent,
    ProjectCardComponent,
    BagPackComponent,
    TechnoCardComponent,
    ProjectsComponent,
    EmailCardComponent,
    SkillsComponent,
    
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
