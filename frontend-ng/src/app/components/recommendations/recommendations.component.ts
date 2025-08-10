import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-recommendations',
    imports: [CommonModule],
    templateUrl: './recommendations.component.html',
    styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  @Input() recommendations$!: Observable<
    {
      personWhoProvided: string;
      profileLink: string;
      avatar: string;
      role: string;
      organization: string;
      comments: string;
    }[]
  >;
}
