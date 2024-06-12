import { Component } from '@angular/core';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [GetInTouchComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {}
