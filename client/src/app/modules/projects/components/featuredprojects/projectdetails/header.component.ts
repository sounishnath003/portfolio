import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="p-6 bg-gray-50 rounded-lg">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div
          class="flex w-2/3 flex-wrap flex-col justify-center items-start font-semibold space-y-4"
        >
          <div class="text-3xl">Sounish Nath</div>
          <div class="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            quibusdam repudiandae, quasi voluptatibus repellendus error
            voluptates cupiditate velit nam deserunt dolore esse optio officiis
            sit molestias deleniti doloremque excepturi quia?
          </div>
        </div>
        <div class="p-2">
          <img
            src="https://avatars.githubusercontent.com/u/40270033?v=4"
            alt="user.avatar.url"
            class="rounded-full w-32 h-32"
          />
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
