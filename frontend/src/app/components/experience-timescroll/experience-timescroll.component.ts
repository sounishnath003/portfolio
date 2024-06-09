import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience-timescroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-timescroll.component.html',
  styleUrl: './experience-timescroll.component.css',
})
export class ExperienceTimescrollComponent {
  @Input() professionalExperiencesTimeline$!: Observable<
    {
      timeInfo: string;
      location: string;
      roleOrWork: string;
      organizationName: string;
      content: string;
    }[]
  >;
}
