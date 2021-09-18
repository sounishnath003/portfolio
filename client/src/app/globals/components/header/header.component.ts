import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../modules/cms/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <div
      class="w-full flex my-16 flex-col md:flex-row justify-between items-center flex-1"
    >
      <div
        routerLink="/"
        class="m-auto cursor-pointer hover:shadow-xl rounded-full"
      >
        <img
          src="https://avatars.githubusercontent.com/u/40270033?v=4"
          alt="logo"
          class="w-20 h-20 rounded-full shadow-xl border-4 border-white ring-2 ring-blue-700 "
        />
      </div>
      <div
        class="m-auto my-6 flex text-md uppercase font-semibold text-gray-800 space-x-8 items-center"
      >
        <div
          *ngFor="let navigator of navigators"
          [routerLink]="navigator.routeTo"
          [routerLinkActive]="
            'shadow bg-gray-50 border border-gray-700 text-blue-600 p-2 rounded-lg'
          "
          class="m-auto cursor-pointer hover:text-blue-500"
        >
          {{ navigator.routeDestName }}
        </div>
        <div
          *ngIf="isAdmin | async"
          (click)="logout()"
          class="m-auto bg-red-100 px-4 py-2 ring-1 ring-red-600 rounded cursor-pointer hover:text-red-800 text-red-500"
        >
          log out
        </div>
      </div>
    </div>
  `,
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  isAdmin: Observable<boolean>;
  navigators: Array<{
    routeTo: string;
    routeDestName: string;
  }> = [
    { routeTo: '/projects', routeDestName: 'projects' },
    { routeTo: '/blogs', routeDestName: 'blogs' },
    { routeTo: '/about', routeDestName: 'about' },
    { routeTo: '/catch-me', routeDestName: 'catch me' },
  ];

  constructor(private readonly authService: AuthService) {
    this.isAdmin = new Observable<boolean>();
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.getAuthState();
  }

  logout() {
    this.isAdmin = this.authService.logoutWithChange();
  }
}
