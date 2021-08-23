import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {share} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private readonly router: Router) {
    this.precheckedAuthenticated();
  }

  getAuthState() {
    return this.user$.asObservable().pipe(share());
  }

  doLogin(password: string) {
    const today = new Date().toLocaleDateString();
    if (today === password) {
      this.user$.next(true);
      window.localStorage.setItem('isLoggedIn', JSON.stringify(true));
      this.router.navigate(['cms', 'dashboard', 'project-type']);
    } else {
      window.alert('Something went wrong! Refresh the page');
      this.user$.next(false);
    }
  }

  private precheckedAuthenticated() {
    const alreadyLoggedIn = window.localStorage.getItem('isLoggedIn');
    if (alreadyLoggedIn) {
      this.user$.next(true);
    }
  }

  logoutWithChange() {
    window.localStorage.clear();
    this.router.navigate(['/']);
    this.user$.next(false);
    return this.getAuthState();
  }

}
