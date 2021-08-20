import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { TechstackInfoComponent } from './components/techstack-info/techstack-info.component';
import {SanitizeToHtmlPipe} from "../../globals/pipes/sanitize-to-html.pipe";


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    TechstackInfoComponent,
    SanitizeToHtmlPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
