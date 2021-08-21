import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../auth.service";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    return this.authService.getAuthState().pipe(take(1), map((state) => {
      console.log({state})
      if (state === false) this.router.navigate(['cms', 'login']);
      return state;
    }))

  }
}
