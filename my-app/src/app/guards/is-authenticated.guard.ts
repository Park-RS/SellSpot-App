import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Auth } from '../services/auth.service';
import { HeaderComponent } from '../layout/header/header.component';

export class IsAuthenticatedGuard implements CanActivate {
    constructor(
        private auth: Auth,
        private router: Router,
        private logIn: HeaderComponent
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        // return this.auth.isAuthorised.pipe(tap(isAuthorised =>
        // 	{
        // 		if (!isAuthorised)
        // 		{
        // 			this.router.navigate(['new-advertisement']);
        // 		}
        // 	}))
        if (this.auth.isAuthorised) {
            return true;
        } else {
		
            return false;
        }
    }
}
