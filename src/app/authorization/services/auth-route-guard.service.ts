import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Subscription, Observable } from 'rxjs';
import { map, skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>|boolean {

    return this.authService.authNavStatus$
      .pipe(map((auth) => {
        if (auth) {
            return true;
        }
        let route = this.router.config.find(r => r.path === 'error');
        route.data = { error: "The page can only be reached from the UI" };
        this.router.navigateByUrl('error');
        return false;
      }));
  }
}
