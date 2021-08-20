import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { ProjectTypeComponent } from './components/project-type/project-type.component';

@NgModule({
  declarations: [CmsComponent, ProjectTypeComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CmsModule {}
