import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { AddFormComponent } from './components/project-type/add-form/add-form.component';
import { ProjectTypeComponent } from './components/project-type/project-type.component';
import { TableLayoutComponent } from './components/project-type/table-layout/table-layout.component';
import {
  AuthGuardCanActivateChild,
  AuthGuardCanActivateSelf,
} from './guards/auth.guard';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { AddformComponent } from './components/projects/addform.component';
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
  ],
  providers: [AuthGuardCanActivateChild, AuthService, AuthGuardCanActivateSelf],
  imports: [CommonModule, CmsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CmsModule {}
