import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserToken } from "../models/user-token.model";

@Injectable({
    providedIn: 'root',
  })
export class AuthGuardService {

    constructor(private readonly router: Router) {}

    canActivate(currentUser: UserToken): boolean {
        if (!currentUser || !currentUser.jwtToken) {
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    }

}

export const profileGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    let currentUser = new UserToken();
    const sessionStorageUser = sessionStorage.getItem('authenticatedUser');
    if (sessionStorageUser) {
        currentUser = new UserToken(sessionStorageUser, sessionStorage.getItem('authenticatedUserToken') as string);
    }
    return inject(AuthGuardService).canActivate(currentUser);
};