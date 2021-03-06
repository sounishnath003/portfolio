import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <div class="mx-24">
      <div class="text-gray-800 font-semibold back-image">
        <div class="my-6 text-4xl md:text-5xl">
          Hello &excl;
          <span class="text-blue-600"> I&apos;m Sounish&comma; </span>
        </div>
        <div
          class="max-w-xl text-3xl md:text-6xl md:leading-normal leading-relaxed tracking-wide"
        >
          <mark class="bg-yellow-100 rounded"> Fullstack &AMP; Data </mark>
          Engineer Based in Kolkata, In.
        </div>
        <div
          class="text-3xl text-blue-800 font-semibold text-center animate-bounce"
        >
          <a href="#__short-info-section"> &darr; </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
