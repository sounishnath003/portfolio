import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="mt-10 text-gray-700 text-center m-auto border-t">
        <div class="my-3">
          &copy; {{ year }} Made with ❤️ using 🧑🏽‍💻 Angular & ☀️ Node
          TypeScript
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
