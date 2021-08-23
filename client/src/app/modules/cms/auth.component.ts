import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  template: `
    <div class="max-w-md text-center rounded mx-auto ">
      <div class="text-2xl font-semibold text-blue-700 my-4">
        Content Manager Dashboard
      </div>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div>
          <div>
            <input
              class="px-8 py-2 bg-gray-50 border"
              formControlName="password"
              type="password"
              placeholder="Enter Secret Key"
            />
          </div>
        </div>
        <div class="my-4">
          <input
            type="submit"
            value="Login"
            class="px-6 py-3 cursor-pointer rounded bg-green-300"
          />
        </div>
      </form>
    </div>
  `,
  styles: [],
})
export class AuthComponent implements OnInit {
  form: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    const payload = this.form.value.password;
    if (!payload) window.alert('Please enter your secret key!');
    else {
      this.authService.doLogin(payload);
      this.form.reset();
    }
  }
}
