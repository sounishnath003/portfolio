import { Component, OnInit, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectInterface, ProjectService } from 'src/app/modules/shared';

@Component({
  selector: 'app-projectdetails',
  template: `
    <div
      [routerLink]="gotoPrevRoute()"
      class="my-3 p-4 flex flex-row cursor-pointer font-semibold hover:text-blue-600 justify-start items-start space-x-4"
    >
      <div>&larr;</div>
      <div>All projects</div>
    </div>
    <div class="p-2" *ngIf="project; else temp">
      <div class="text-2xl md:text-4xl">{{ project.title }}</div>
      <blockquote class="my leading-relaxed text-gray-600">
        ~ {{ project.summary }}
      </blockquote>

      <div class="my-16">
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(0, 1fr));">
          <section class="col-span-6">
            <article class="prose lg:prose-xl">
              <div
                className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
                [innerHTML]="project.description | markdownToHtml | safeHtml"
              ></div>
            </article>
          </section>
          <div>
            <div class="font-semibold">
              <div class="uppercase"> table content </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ng-template #temp>No Content</ng-template>
  `,
  providers: [ProjectService],
})
export class ProjectdetailsComponent implements OnInit {
  project!: ProjectInterface;

  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
    private readonly projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.loadPayloadRecieved();
  }

  private loadPayloadRecieved() {
    const { id = '', projectName = '' } = this.route.snapshot.params;
    this.projectService.getProjectById(id).subscribe((resp) => {
      this.project = resp.data;
    });
  }

  gotoPrevRoute() {
    return this.router.createUrlTree(['/projects']).toString();
  }
}

@Pipe({ name: 'safeHtml' })
export class Safe {
  constructor(private sanitizer: DomSanitizer) {}

  transform(style: string) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
    //return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}
