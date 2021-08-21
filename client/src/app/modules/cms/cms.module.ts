import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { AddFormComponent } from './components/project-type/add-form/add-form.component';
import { ProjectTypeComponent } from './components/project-type/project-type.component';
import { TableLayoutComponent } from './components/project-type/table-layout/table-layout.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    CmsComponent,
    ProjectTypeComponent,
    AddFormComponent,
    TableLayoutComponent,
    AuthComponent,
  ],
  providers: [AuthGuard],
  imports: [CommonModule, CmsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CmsModule {}
