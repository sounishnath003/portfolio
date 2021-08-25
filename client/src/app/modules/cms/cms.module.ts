import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZoomUpDirective } from '../shared';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { HeaderComponent } from './components/header/header.component';
import { AddFormComponent } from './components/project-type/add-form/add-form.component';
import { ProjectTypeComponent } from './components/project-type/project-type.component';
import { TableLayoutComponent } from './components/project-type/table-layout/table-layout.component';
import { AddformComponent } from './components/projects/addform.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {
  AuthGuardCanActivateChild,
  AuthGuardCanActivateSelf,
} from './guards/auth.guard';
import { TableviewComponent } from './projects/tableview.component';

@NgModule({
  declarations: [
    CmsComponent,
    ProjectTypeComponent,
    AddFormComponent,
    TableLayoutComponent,
    AuthComponent,
    ProjectsComponent,
    HeaderComponent,
    AddformComponent,
    TableviewComponent,
    ZoomUpDirective,
  ],
  providers: [AuthGuardCanActivateChild, AuthService, AuthGuardCanActivateSelf],
  imports: [CommonModule, CmsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CmsModule {}
