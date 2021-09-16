import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/modules/shared/services/skill.service';

@Component({
  selector: 'app-skills',
  template: `
    <div>
      <app-add-route-button
        routeToLink="/cms/dashboard/skills/add"
      ></app-add-route-button>
      <app-customtable
        [tableHeaders]="['skill', 'parentSkillId', 'Actions']"
        [uniqueIdentifierProperty]="'_id'"
        [loadData]="allSkillTable"
      ></app-customtable>
    </div>
  `,
  styles: [],
  providers: [SkillService],
})
export class SkillsComponent implements OnInit {
  allSkillTable: any[] = [];

  constructor(private readonly skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService
      .getAllSkillsForCms()
      .subscribe((data) => (this.allSkillTable = data));
  }
}
