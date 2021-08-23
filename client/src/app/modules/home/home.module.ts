import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ShortInfoComponent } from './components/short-info/short-info.component';
import {SanitizeToHtmlPipe} from "../../globals/pipes/sanitize-to-html.pipe";
import { TechToolsComponent } from './components/tech-tools/tech-tools.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BagPackComponent } from './components/tech-tools/bag-pack.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ShortInfoComponent,
    SanitizeToHtmlPipe,
    TechToolsComponent,
    MainContentComponent,
    ProjectCardComponent,
    BagPackComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
