import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/modules/shared/services/skill.service';

@Component({
  selector: 'app-skills',
  template: `
    <div>
      <app-add-route-button
        routeToLink="/cms/dashboard/skills/add"
      ></app-add-route-button>
      <div *ngFor="let skill_node of allSkillTable" class="my-3">
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
              <div>
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

  constructor(private readonly skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService
      .getSkillsetsCollections()
      .subscribe((data) => (this.allSkillTable = data));
  }
}
