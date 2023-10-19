import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class LoginInterceptor implements HttpInterceptor {
    constructor(private auth: Auth) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // const token = this.auth.getToken();
        // if (token !== null) {
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${sessionStorage.getItem('token')} `,
        //         },
        //     });
        // }
        // return next.handle(request);

        // const token = this.auth.getToken();
        // if (token !== null) {
        //     const authReq = request.clone({
        //         headers: request.headers.set(
        //             'Authorization',
        //             `Bearer ${token}`
        //         ),
        //     });
        //     return next.handle(authReq);
        // } else {
        //     return next.handle(request);
        // }
        if (this.auth.isAuthent()) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.auth.getToken(),
                },
            });
        }
		return next.handle(request)
    }
}
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useclass: LoginInterceptor, multi: true },
];
