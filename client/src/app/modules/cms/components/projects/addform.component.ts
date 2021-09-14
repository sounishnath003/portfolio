/// <reference path="../../node_modules/@types/remarkable/lib/index.d.ts">
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProjectInterface, ProjectService } from "../../../shared";


@Component({
  selector: 'app-addform',
  template: `
    <div *ngIf="error" class="text-red-400 font-semibold"> Error: {{error}} </div>
    <div class="font-semibold text-gray-800">
      <div class="text-2xl text-blue-600"> Create new project</div>
      <div class="my-4">
        <form [formGroup]="form" (ngSubmit)="onSubmitClicked()">
          <div class="flex flex-col space-y-3">
            <label for="photo">Photo URL: </label>
            <input required type="url" name="photo" id="photo" formControlName="photo"
                   class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
                   placeholder="https://goo.gl/images/assets/v1/ng.svg">
          </div>
          <div class="flex flex-col space-y-3 my-3">
            <label for="title">Project Title: </label>
            <input required type="text" name="title" id="title" formControlName="title"
                   class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
                   placeholder="Asset scanner using Go">
          </div>
          <div class="flex flex-col space-y-3">
            <label for="summary">Summary: </label>
            <input required type="text" name="summary" id="summary" formControlName="summary"
                   class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
                   placeholder="A short summary of the related project">
          </div>
          <div class="flex flex-col space-y-3 my-3">
            <label for="description">Description: </label>
            <textarea required rows="5" type="text" name="description" id="description"
                      formControlName="description"
                      class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
                      placeholder="Description: Add some good description which tells your experience"></textarea>
          </div>
          <button type="submit" value="Save"
                  class="my-4 float-right px-8 py-2 tracking-wide rounded bg-blue-600 text-white"> {{ buttonText }}
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class AddformComponent implements OnInit {
  error: string = '';
  urlType: string = '';
  activeSubscription: Subscription = new Subscription();
  buttonText: string = 'Publish';

  form: FormGroup = new FormGroup({
    _id: new FormControl(''),
    __v: new FormControl(''),
    photo: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private readonly projectService: ProjectService) {
    this.preloadCheckWithUrlState();
  }

  ngOnInit(): void {
  }

  onSubmitClicked() {
    const rawData = this.form.value;
    this.buttonText = 'Publishing...';
    setTimeout(() => {
      if (this.urlType === 'add')
        this.createNewProjectRecord(rawData);
      else
        this.updateProjectRecord(rawData);
    }, 1100)
  }

  private preloadCheckWithUrlState() {
    this.urlType = this.router.url.split('/')[4];
    if (this.urlType === 'edit') {
      const state = this.router.getCurrentNavigation()?.extras.state;
      this.form.setValue({ ...this.form.value, ...state });
    }
  }

  private createNewProjectRecord(rawData: FormGroup) {
    this.activeSubscription = this.projectService.createNewProjectRecord(rawData).subscribe((data) => {
      this.router.navigate(['cms', 'dashboard', 'projects']).then();
      this.form.reset();
    },
      (error: Error) => this.error = error.message
    )
  }

  private updateProjectRecord(rawData: ProjectInterface) {
    this.projectService.updateProjectRecord(rawData).subscribe((data) => {
      this.router.navigate(['cms', 'dashboard', 'projects']);
      this.form.reset();
    }, (error: Error) => this.error = error.message)
  }
}
