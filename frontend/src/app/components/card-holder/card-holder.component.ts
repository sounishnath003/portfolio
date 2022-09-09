import { Component, Input, OnInit } from '@angular/core';
import { BlogPost, Project } from 'src/app/template/portfolio-config.interface';

export type CardHolderType = BlogPost | Project;

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.css'],
})
export class CardHolderComponent implements OnInit {
  @Input() cardContent!: CardHolderType;
  constructor() {}

  ngOnInit(): void {}
}
