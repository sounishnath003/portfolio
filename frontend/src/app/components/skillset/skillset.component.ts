import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.css',
})
export class SkillsetComponent {
  @Input() skillsets$!: Observable<
    {
      domain: string;
      skills: string[];
    }[]
  >;
}
