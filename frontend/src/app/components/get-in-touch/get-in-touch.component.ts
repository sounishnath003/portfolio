import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.css',
})
export class GetInTouchComponent {}
