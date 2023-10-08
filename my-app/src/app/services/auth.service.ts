import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Auth {
    private _isAuthorised = new BehaviorSubject<boolean>(false);
    isAuthorised = this._isAuthorised.asObservable();
    public userName: string = '';
    private token_name = 'token';

    constructor(private http: HttpClient) {
        const token = localStorage.getItem('token');
        this._isAuthorised.next(!!token);
    }

    login(login: string, password: string) {
        return this.http
            .post('http://194.87.237.48:5000/Auth/Login', {
                login,
                password,
            })
            .pipe(
                tap((response: any) => {
                    this._isAuthorised.next(true);
                    localStorage.setItem(this.token_name, response);
                    console.log(response.token);
                })
            );
    }
    logOut() {
        localStorage.removeItem('token');
        this._isAuthorised.next(false);
    }
    setUserName(name: string) {
        this.userName = name;
    }

    getUserName() {
        return this.userName;
    }
    getCurrentUser() {
        this.http
            .get('http://194.87.237.48:5000/Users/current')
            .subscribe((response) => {
                console.log(response);
            });
    }
}
