import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  template: `
    <div class="my-10">
      <div class="flex flex-row space-x-6 items-center justify-start flex-wrap">
        <div>Connect me in:</div>
        <div
          class="rounded-full p-2 cursor-pointer hover:bg-gray-200 transition-all hover"
          *ngFor="let social of socialLinks"
        >
          <a [href]="social.link" target="blank"
            ><img [src]="social.icon" [alt]="social.link" class="w-6 h-6"
          /></a>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SocialLinksComponent implements OnInit {
  socialLinks: Array<{
    icon: string;
    link: string;
  }> = [
    {
      icon: 'assets/facebook.svg',
      link: 'https://www.facebook.com/sounish.nath',
    },
    {
      icon: 'assets/twitter.svg',
      link: 'https://www.twitter.com/sounish1',
    },
    {
      icon: 'assets/instagram.svg',
      link: 'https://www.instagram.com/sounishnath003',
    },
    {
      icon: 'assets/linkedin.svg',
      link: 'https://in.linkedin.com/in/sounish-nath-897b30186',
    },
    {
      icon: 'assets/whatsapp.svg',
      link: 'https://wa.me/918017204855?text=Hello Sounish, I got to know you from your portfolio website. Have a great day ahead!',
    },
    {
      icon: 'assets/github.png',
      link: 'https://www.github.com/sounishnath003',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
