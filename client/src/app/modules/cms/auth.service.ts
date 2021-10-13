import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
      .get(`${environment.API_URL}/api/auth`, {
        params: { payload: btoa(password) },
      })
      .pipe(this.handleError())
      .subscribe(
        (resp: any) => {
          this.user$.next(true);
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
          localStorage.setItem('xApiKey', JSON.stringify(resp.apiKey));
          this.router.navigate(['cms', 'dashboard', 'project-type']);
        },
        (error: Error) => {
          console.warn('ErrorResponse:', error.message);
          alert(error.message);
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
    const alreadyLoggedIn = localStorage.getItem('isLoggedIn');
    if (alreadyLoggedIn) {
      this.user$.next(true);
    }
  }

  logoutWithChange() {
    localStorage.clear();
    this.router.navigate(['/']);
    this.user$.next(false);
    return this.getAuthState();
  }
}
