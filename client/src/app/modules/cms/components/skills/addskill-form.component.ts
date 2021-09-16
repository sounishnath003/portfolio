import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SkillService } from 'src/app/modules/shared/services/skill.service';

@Component({
  selector: 'app-addskill-form',
  template: `
    <div>
      <div class="font-semibold text-gray-800">
        <div class="text-2xl text-blue-600">Create new skill</div>
        <div class="my-4">
          <form
            class="flex flex-col md:flex-row md:space-x-10 items-center justify-center"
            [formGroup]="form"
            (ngSubmit)="onSubmit()"
          >
            <div class="flex flex-col space-y-3">
              <label for="skill">Skill: </label>
              <input
                required
                type="url"
                name="skill"
                id="skill"
                formControlName="skill"
                class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
                placeholder="Backend"
              />
            </div>
            <div class="flex relative flex-col space-y-3 my-3">
              <label for="parentSkillId">Belongs to: </label>
              <select
                class="w-full h-10 py-2 px-8 text-base placeholder-gray-600 border border-gray-600 rounded-lg appearance-none focus:shadow-outline"
                formControlName="parentSkillId"
                aria-placeholder="select skills from dropdown"
              >
                <option value="null">Self</option>
                <option
                  [value]="node._id"
                  *ngFor="let node of parentSkillNodes"
                >
                  {{ node.skill }}
                </option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
              >
                <svg class="w-5 h-5 fill-current mt-6" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <button
                type="submit"
                value="Save"
                class="mt-8 float-right px-8 py-2 tracking-wide rounded bg-blue-600 text-white"
              >
                {{ buttonText }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [],
  providers: [SkillService],
})
export class AddskillFormComponent implements OnInit, OnDestroy {
  buttonText: string = 'Publish';

  form: FormGroup = new FormGroup({
    _id: new FormControl('', [Validators.required]),
    __v: new FormControl('', [Validators.required]),
    skill: new FormControl('', [Validators.required]),
    parentSkillId: new FormControl('', [Validators.required]),
  });

  parentSkillNodes: any = [];
  activeSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private readonly skillService: SkillService
  ) {}

  ngOnDestroy(): void {
    this.activeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.skillService
      .getAllParentSkillNodes()
      .subscribe((data) => (this.parentSkillNodes = data));
  }

  onSubmit() {
    if (this.form.invalid) {
      this.buttonText = 'Publishing...';
      setTimeout(() => {
        const payload = this.form.value;
        this.form.reset();

        this.activeSubscription = this.skillService
          .createNewSkillRecord(payload)
          .subscribe((data) => {
            this.router.navigate(['cms', 'dashboard', 'skills']);
          });
      }, 1100);
    } else {
      window.alert(`Please carefully fill the inputs`);
    }
  }
}
