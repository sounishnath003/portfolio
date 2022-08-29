import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { SkillsSet } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillsSets$!: Observable<SkillsSet[]>;
  constructor(private readonly portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skillsSets$ = this.portfolioService.skillsSets$;
  }
}
