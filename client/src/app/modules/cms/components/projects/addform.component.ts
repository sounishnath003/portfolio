/// <reference path="../../node_modules/@types/remarkable/lib/index.d.ts">
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as marked from 'marked';
import { Subscription } from 'rxjs';
import { CustomFormInterface } from 'src/app/modules/shared/components/customform/customform.component';
import { ProjectDTO, ProjectService } from '../../../shared';

@Component({
  selector: 'app-addform',
  template: `
    <div *ngIf="error" class="text-red-400 font-semibold">
      Error: {{ error }}
    </div>
    <app-customform
      formTitle="Create new project"
      [formGroupContext]="form"
      [customFormContext]="formContext"
      (onSubmitEmitter)="onSubmitClicked($event)"
    ></app-customform>
  `,
  styles: [],
})
export class AddformComponent implements OnInit {
  error: string = '';
  urlType: string = '';
  activeSubscription: Subscription = new Subscription();
  buttonText: string = 'Publish';
  showRendered: boolean = false;
  markDownContent: string = '';

  form: FormGroup = new FormGroup({
    _id: new FormControl(''),
    __v: new FormControl(''),
    photo: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  // * FormContext
  formContext: Array<CustomFormInterface> = [
    {
      fieldControlName: 'photo',
      labelText: 'Photo URL',
      placeholderText: 'https://goo.gl/images/assets/v1/ng.svg',
      type: 'url',
    },
    {
      fieldControlName: 'title',
      labelText: 'Project Title',
      placeholderText: 'Asset scanner using Go',
      type: 'text',
    },
    {
      fieldControlName: 'summary',
      labelText: 'Summary',
      placeholderText: 'A short summary of the related project',
      type: 'text',
    },
    {
      fieldControlName: 'description',
      labelText: 'Description',
      placeholderText:
        'Description: Add some good description which tells your experience',
      type: 'textarea',
    },
  ];

  constructor(
    private router: Router,
    private readonly projectService: ProjectService
  ) {}

  ngOnInit(): void {}

  onSubmitClicked(emittedPayload: {
    type: string;
    payload: Partial<ProjectDTO>;
  }) {
    emittedPayload.type === 'ADD'
      ? this.createNewProjectRecord(emittedPayload.payload)
      : this.updateProjectRecord(emittedPayload.payload);
  }

  private createNewProjectRecord(rawData: any) {
    this.activeSubscription = this.projectService
      .createNewProjectRecord(rawData)
      .subscribe(
        (data) => {
          this.router.navigate(['cms', 'dashboard', 'projects']).then();
          this.form.reset();
        },
        (error: Error) => (this.error = error.message)
      );
  }

  private updateProjectRecord(rawData: any) {
    this.projectService.updateProjectRecord(rawData).subscribe(
      (data) => {
        this.router.navigate(['cms', 'dashboard', 'projects']);
        this.form.reset();
      },
      (error: Error) => (this.error = error.message)
    );
  }

  parseMarkdownToHtml(): string {
    return marked(this.form.value['description']);
  }
}
