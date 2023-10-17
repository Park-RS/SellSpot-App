import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/services/auth.service';
const TOKEN_HEADER_KEY = 'Authorization';
@Injectable({
    providedIn: 'root',
})
export class LoginInterceptor implements HttpInterceptor {
    constructor(private auth: Auth) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = this.auth.getToken();
        if (token !== null) {
            request = request.clone({
                setHeaders: {
                    TOKEN_HEADER_KEY: this.auth.getToken(),
                },
            });
        }
        return next.handle(request);

        // const token = this.auth.getToken();
        // if (token !== null) {
        //     const authReq = request.clone({
        //         headers: request.headers.set(
        //             TOKEN_HEADER_KEY,
        //             `Bearer ${token}`
        //         ),
        //     });
        // 	return next.handle(authReq);
        // } else {
        // 	return next.handle(request)
        // }
    }
}
