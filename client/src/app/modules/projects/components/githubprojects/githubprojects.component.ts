import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubapiService } from 'src/app/modules/shared/services/githubapi.service';
import { RepositoryInterface } from 'src/app/modules/shared/services/utils';

@Component({
  selector: 'app-githubprojects',
  template: `
    <div
      id="github-projects"
      class="text-2xl hover:text-blue-700 cursor-pointer inline-flex space-x-3 font-semibold"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="blue"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.8 1.7" />
          <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
        </svg>
      </div>
      <a>Projects from GitHub Repository</a>
    </div>
    
    <div class="my-2">
      <div *ngIf="repository$ | async as repositories; else temp">
        <p>Count: {{ repositories.length }}</p>
        <div>
          <ul class=" ">
            <li *ngFor="let repository of repositories">
              {{ repository.name }}
            </li>
          </ul>
        </div>
      </div>
      <ng-template #temp>
        <div class="text-mono font-monoo">Loading...</div>
      </ng-template>
    </div>
  `,
  styles: [],
  providers: [GithubapiService],
})
export class GithubprojectsComponent implements OnInit {
  repository$: Observable<Array<RepositoryInterface>> = new Observable();

  constructor(private readonly githubService: GithubapiService) {}

  ngOnInit(): void {
    this.repository$ = this.githubService.getRepository();
  }
}
