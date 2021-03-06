import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  private user: User;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.manager.getUser().then(user => {
      this.user = user;
      this._authNavStatusSource.next(this.isAuthenticated());
    }).catch(error => {
      console.log(error);
    });
  }

  register(userRegistration: any) {
    return this.http
      .post(this.configService.authApiURI + '/account', userRegistration)
      .pipe(catchError(this.handleError));
  }

  login() {
    return this.manager.signinRedirect().catch();
  }

  async completeAuthentication() {
      this.user = await this.manager.signinRedirectCallback().catch();
      this._authNavStatusSource.next(this.isAuthenticated());
  }

  async signout() {
    await this.manager.signoutRedirect().catch();
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  isCurrentUser(id: string): boolean {
    return this.isAuthenticated() && id == this.id;
  }

  get authorizationHeaderValue(): string {
    if (!this.isAuthenticated())
      return "";
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get name(): string {
    return this.user != null ? this.user.profile.given_name : '';
  }

  get id(): string {
    return this.user != null ? this.user.profile.sub : '';
  }

  private handleError(error: any) {
    let applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return throwError(applicationError);
    }

    var modelStateErrors: string = '';
      for (var key in error.error) {
        if (error.error[key]) modelStateErrors += error.error[key].description + '\n';
      }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    return throwError(modelStateErrors || 'Server error');
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'http://localhost:5000',
      client_id: 'angular_spa',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200/welcome',
      response_type: "id_token token",
      scope: "openid profile email api.read",
      filterProtocolClaims: true,
      loadUserInfo: true,
      automaticSilentRenew: true
  };
}
