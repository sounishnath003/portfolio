import { Component, Input, OnInit } from '@angular/core';

type PackTool = {
  logo: string;
  name: string;
};

@Component({
  selector: 'app-techeco-card',
  template: `
    <li class="relative" *ngIf="pack">
      <div style="border-radius:12px" class="absolute inset-0"></div>
      <button
        type="button"
        class="block hover:bg-gray-100 w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-xl text-gray-900"
      >
        <div class="flex flex-col items-center hover:text-gray-700 py-1">
          <img [src]="pack.logo" [alt]="pack.name" /> {{ pack.name }}
        </div>
      </button>
    </li>
  `,
  styles: [],
})
export class TechecoCardComponent implements OnInit {
  @Input() pack: PackTool | null = null;

  constructor() {}

  ngOnInit(): void {}
}
