import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeService } from '../resume.service';
import { LatexLoaderComponent } from './components/latex-loader/latex-loader.component';

@NgModule({
  declarations: [],
  providers: [ResumeService],
  imports: [CommonModule, ResumeRoutingModule],
})
export class ResumeModule {}
