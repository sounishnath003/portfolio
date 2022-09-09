import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-quick-projects',
  templateUrl: './quick-projects.component.html',
  styleUrls: ['./quick-projects.component.css']
})
export class QuickProjectsComponent implements OnInit {
  @Input() recentProjects$!: Observable<Project[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
