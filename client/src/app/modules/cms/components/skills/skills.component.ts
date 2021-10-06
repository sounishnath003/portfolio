import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/modules/shared/services/skill.service';

@Component({
  selector: 'app-skills',
  template: `
    <div>
      <app-add-route-button
        routeToLink="/cms/dashboard/skills/add"
      ></app-add-route-button>
      <div *ngIf="allSkillTable.length; else temp">
        <div
          *ngFor="let skill_node of allSkillTable; let idx = index"
          class="my-3"
        >
          <div class="text-blue-700">{{ skill_node.parentSkill }}</div>
          <div class="parent-grid">
            <div
              *ngFor="let c of skill_node.relatedSkills"
              class="m-auto rounded px-4 my-2 py-2 border border-gray-500 hover:border-red-600 hover:bg-red-100 transition-all cursor-pointer"
            >
              <div
                class="flex control_display flex-wrap justify-between items-center"
              >
                <div>{{ c.skill }}</div>
                <div
                  (click)="
                    onPressed({
                      parentSkillIdx: idx,
                      skillToDeleteId: c._id
                    })
                  "
                >
                  <img
                    src="assets/close.svg"
                    alt="close.icon"
                    class="w-5 hover:text-red-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ng-template #temp>
      <div class="m-auto p-4 bg-red-50 rounded-lg text-center text-red-500">
        No skills contents are made. Add some to populate view.
      </div>
    </ng-template>
    <app-modal
      [showModal]="showModal"
      message="Are you sure want to delete skills?"
      (onSaveEventEmitted)="eventCapturedFromModal($event)"
    ></app-modal>
  `,
  styles: [
    `
      .control_display img {
        visibility: hidden;
      }
    `,
    `
      .control_display:hover img {
        visibility: visible;
      }
    `,
  ],
  providers: [SkillService],
})
export class SkillsComponent implements OnInit {
  allSkillTable: any[] = [];
  showModal: boolean = false;
  onOpenModal: {
    skillToDeleteId: null | string;
    parentSkillIdx: null | number;
  } = { skillToDeleteId: null, parentSkillIdx: null };

  constructor(
    private readonly skillService: SkillService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.skillService
      .getSkillsetsCollections()
      .subscribe((data) => (this.allSkillTable = data));
  }

  eventCapturedFromModal($event: any) {
    this.showModal = false;
    if ($event === true) {
      this.skillService
        .deleteSkillService(this.onOpenModal.skillToDeleteId as string)
        .subscribe((_) => {
          this.deleteReference();

          this.router.navigate(['cms', 'dashboard', 'skills']);
        });
    }
  }

  private deleteReference() {
    const relatedSkills =
      this.allSkillTable[this.onOpenModal.parentSkillIdx as number]
        .relatedSkills;

    this.allSkillTable[
      this.onOpenModal.parentSkillIdx as number
    ].relatedSkills = relatedSkills.filter(
      (_skill: any) => _skill._id !== this.onOpenModal.skillToDeleteId
    );
  }

  onPressed(payload: any) {
    this.showModal = true;
    this.onOpenModal = payload;
  }
}
