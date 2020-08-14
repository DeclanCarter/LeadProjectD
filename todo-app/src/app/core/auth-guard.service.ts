import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router,
              private msalAuthService: MsalService) { }


canActivate(): boolean {
  const loggedIn = !!this.msalAuthService.getAccount();
  if (!loggedIn) {
    this.router.navigate(['/']);
    return false;
  } else {
    return true;
  }
// return this.msalAuthService.i.isLoggedIn().then(loggedIn => {
// if (!!this.msalAuthService.getAccount();) {
// this.router.navigate(['/home']);
// return false;
// }
// return true;
// });
}
}
