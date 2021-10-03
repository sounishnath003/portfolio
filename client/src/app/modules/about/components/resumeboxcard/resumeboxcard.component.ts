import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumeboxcard',
  template: `
    <section *ngIf="!showResume; else temp">
      <div class="mt-20 pb-20 relative block rounded-2xl shadow-2xl gradiant">
        <div class="max-w-4xl mx-auto m-auto" style="transform: translateZ(0);">
          <div>
            <div id="content" class="container mx-auto px-4">
              <section data-category="headers" class="py-12 px-4 text-center">
                <div class="w-full mt-5 text-white max-w-2xl mx-auto">
                  <span data-config-id="tagline" class="text-sm font-semibold"
                    >Know from my resume »
                  </span>
                  <h2
                    data-config-id="header"
                    class="text-3xl md:text-5xl my-3 mb-8 leading-tight font-heading"
                  >
                    Would you like to know more about my experience?
                    <p class="text-sm my-2 text-gray-200">
                      &target; Tap the below button to get my resume viewed.
                    </p>
                  </h2>

                  <div
                    (click)="showResume = !showResume"
                    routerlinkactive="router-link-active"
                    data-config-id="primary-action"
                    class="text-black inline font-semibold cursor-pointer px-4 py-4 rounded bg-green-300 hover:bg-green-400"
                    tabindex="0"
                  >
                    Check Resume &rarr;
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ng-template #temp>
      <div
        class="mt-20 pb-20 relative block rounded-2xl shadow-md md:shadow-2xl"
      >
        <div
          class="px-5 py-2 hover:bg-gray-200 cursor-pointer m-4 inline-flex rounded bg-gray-100"
          (click)="showResume = !showResume"
        >
          &larr; Go back
        </div>
        <div>
          <object
            data="assets/resume.pdf"
            type="application/pdf"
            class="w-full object-cover"
            height="600"
          >
            alt : <a href="assets/resume.pdf">resume.pdf</a>
          </object>
        </div>
      </div>
    </ng-template>
  `,
  styleUrls: ['./resumeboxcard.component.css'],
})
export class ResumeboxcardComponent implements OnInit {
  showResume: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
