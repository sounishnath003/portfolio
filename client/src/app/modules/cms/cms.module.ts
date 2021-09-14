import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ZoomUpDirective} from '../shared';
import {ModalComponent} from '../shared/components/modal/modal.component';
import {ModalService} from '../shared/components/modal/modal.service';
import {AuthComponent} from './auth.component';
import {AuthService} from './auth.service';
import {CmsRoutingModule} from './cms-routing.module';
import {CmsComponent} from './cms.component';
import {HeaderComponent} from './components/header/header.component';
import {AddFormComponent} from './components/project-type/add-form/add-form.component';
import {ProjectTypeComponent} from './components/project-type/project-type.component';
import {TableLayoutComponent} from './components/project-type/table-layout/table-layout.component';
import {AddformComponent} from './components/projects/addform.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {TableviewComponent} from './components/projects/tableview.component';
import {AuthGuardCanActivateChild, AuthGuardCanActivateSelf,} from './guards/auth.guard';
import {CustomtableComponent} from "../shared/components/customtable/customtable.component";

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
    ModalComponent,
    CustomtableComponent
  ],
  providers: [
    AuthGuardCanActivateChild,
    AuthService,
    AuthGuardCanActivateSelf,
    ModalService,
  ],
  imports: [CommonModule, CmsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CmsModule {
}
