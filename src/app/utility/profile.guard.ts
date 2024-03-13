import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { UserToken } from "../models/user-token.model";

@Injectable()
class PermissionsService {
    canActivate(currentUser: UserToken): boolean {
        if (!currentUser || !currentUser.jwtToken) {
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
    return inject(PermissionsService).canActivate(currentUser);
};