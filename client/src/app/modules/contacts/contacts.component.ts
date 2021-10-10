import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <div class="w-full rounded-lg p-4 shadow-lg bglink-img">
      <div
        class="m-auto w-2/3 font-semibold text-gray-800 rounded-lg z-40 shadow-lg text-center p-4 bg-white"
      >
        <div class="text-center my-3 uppercase">HI, I'M SOUNISH NATH!</div>

        <div class="my-3">
          <div
            class="flex flex-col space-y-4 flex-wrap justify-center items-center"
          >
            <button
              class="style hover:bg-gray-100 hover:shadow-xl inset-0"
              *ngFor="let link of social_links"
            >
              <a [href]="link.link" target="blank"> {{ link.for }} ⚡ </a>
            </button>
            <div class="text-sm text-blue-700 underline">
              &star; Howdy! I am so lucky you landed on my portfolio!
            </div>
          </div>
        </div>
      </div>

      <a
        class="text-xs"
        target="blank"
        href="https://www.freepik.com/vectors/background"
        >Background vector created by freepik - www.freepik.com</a
      >
    </div>
  `,
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  social_links: Array<{
    for: string;
    link: string;
  }> = [
    { for: 'Github', link: 'https://github.com/sounishnath003' },
    {
      for: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sounish-nath-897b30186',
    },
    {
      for: 'Twitter',
      link: 'https://twitter.com/sounish1',
    },
    {
      for: 'Instagram',
      link: 'https://www.instagram.com/sounishnath003/',
    },
    {
      for: 'Facebook',
      link: 'https://www.facebook.com/sounish.nath',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
