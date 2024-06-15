import { Component } from '@angular/core';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';
import { LatexLoaderComponent } from './components/latex-loader/latex-loader.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [GetInTouchComponent, LatexLoaderComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
