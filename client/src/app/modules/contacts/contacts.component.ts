import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <div class="w-full rounded-lg p-4 shadow-lg bglink-img">
      <div
        class="m-auto w-2/3 font-semibold text-gray-800 rounded-lg z-40 shadow-lg text-center p-4 bg-white"
      >
        <img
          src="https://avatars.githubusercontent.com/u/40270033?v=4"
          alt="sounishnath-avatar"
          class="rounded-full w-24 shadow-xl ring-2 ring-black inset m-auto"
        />
        <div class="text-center my-3 uppercase">HI, I'M SOUNISH NATH!</div>

        <div class="my-3">
          <div class="flex flex-col space-y-4 justify-center items-center">
            <button class="style">Github ⚡</button>
            <button class="style">Facebook ⚡</button>
            <button class="style">Instagram ⚡</button>
            <button class="style">LinkedIn ⚡</button>
            <button class="style"> Devfolio ⚡</button>
            <button class="style">Hover me ⚡</button>
            <div>Howdy!</div>
          </div>
        </div>
      </div>

      <a
        class="text-xs"
        target="blank"
        href="https://www.freepik.com/vectors/background"
        >Background vector created by freepik - www.freepik.com</a
      >
    </div>
  `,
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
