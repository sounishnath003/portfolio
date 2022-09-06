import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsSet } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() skillsSets$!: Observable<SkillsSet[]>;
  constructor() {}

  ngOnInit(): void {}
}
