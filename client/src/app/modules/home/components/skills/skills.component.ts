import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/modules/shared/services/skill.service';

@Component({
  selector: 'app-skills',
  template: `
    <section class="font-semibold">
      <div class="my-6">
        <div
          class="text-center text-gray-700 hover:text-indigo-700 text-3xl cursor-pointer"
        >
          My Skills
        </div>
        <div class="textxl opacity-50">CODE</div>
        <div *ngFor="let skill_node of skillsetCollection" class="my-2">
          <div class="text-blue-700">{{ skill_node.parentSkill }}</div>
          <div class="parent-grid">
            <div
              *ngFor="let c of skill_node.relatedSkills"
              class="m-auto rounded px-4 py-2 border border-blue-500 hover:bg-blue-700 transition-all hover:text-white cursor-pointer"
            >
              {{ c.skill }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .parent-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 3px;
        grid-row-gap: 3px;
      }
    `,
  ],
  providers: [SkillService],
})
export class SkillsComponent implements OnInit {
  skillsetCollection: any[] = [];

  constructor(private readonly skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService
      .getSkillsetsCollections()
      .subscribe((data) => (this.skillsetCollection = data));
  }
}
