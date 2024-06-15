import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ResumeService } from '../../../resume.service';

@Component({
  selector: 'app-latex-loader',
  standalone: true,
  imports: [],
  providers: [ResumeService],
  templateUrl: './latex-loader.component.html',
  styleUrl: './latex-loader.component.css',
})
export class LatexLoaderComponent implements OnInit {
  @Input({ required: true }) latextContent!: string;

  _html: any[] = [];
  _safeHtml: SafeHtml | undefined;

  constructor(
    private domSanitizer: DomSanitizer,
    private resumeService: ResumeService
  ) {}

  ngOnInit(): void {
    // Break the string into segments ('text', 'inline', and 'display')
    const segments = this.latextContent;
    console.log({ segments });

    this._safeHtml = this.domSanitizer.bypassSecurityTrustHtml(
      this._html.join('')
    );
  }
}
