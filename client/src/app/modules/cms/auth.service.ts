import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private readonly router: Router, private http: HttpClient) {
    this.precheckedAuthenticated();
  }

  getAuthState() {
    return this.user$.asObservable().pipe(share());
  }

  doLogin(password: string) {
    return this.http
      .get('/api/auth', { params: { payload: btoa(password) } })
      .pipe(this.handleError())
      .subscribe(
        (resp: any) => {
          this.user$.next(true);
          window.localStorage.setItem('isLoggedIn', JSON.stringify(true));
          window.localStorage.setItem('xApiKey', JSON.stringify(resp.apiKey));
          this.router.navigate(['cms', 'dashboard', 'project-type']);
        },
        (error: Error) => {
          console.warn('ErrorResponse:', error.message);
          window.alert(error.message);
        }
      );
  }

  private handleError() {
    return catchError((err) => {
      console.log(err);
      return throwError(err);
    });
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
