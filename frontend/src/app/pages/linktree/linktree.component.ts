import { Component } from '@angular/core';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-linktree',
  standalone: true,
  imports: [NgIf, AsyncPipe, TitleCasePipe, NgFor],
  templateUrl: './linktree.component.html',
  styleUrl: './linktree.component.css',
})
export class LinktreeComponent {
  linkTreeDetails$: Observable<{
    publicName: string;
    photo: string;
    designation: string;
    bio: string;
    links: {
      profileName: string;
      href: string;
      icon: string;
    }[];
  }> = this.portfolioApiService.linktreeDetails$;
  constructor(private readonly portfolioApiService: PortfolioApiService) {}
}
