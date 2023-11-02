import { User } from './../components/interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'AuthToken';
@Injectable({
    providedIn: 'root',
})
export class Auth {
    isAuthenticated: boolean = false;
    public userName: string = '';
    private token!: string;

    constructor(private http: HttpClient) {}

    login(login: string, password: string): Observable<any> {
        return this.http
            .post<any>('http://194.87.237.48:5000/Auth/Login', {
                login,
                password,
            })
            .pipe(
                tap((token: any) => {
                    sessionStorage.setItem('token', `Bearer ${token}`);
                    this.saveToken(`Bearer ${token}`);
                    console.log(token);
                })
            );
    }
    logOut() {
        sessionStorage.removeItem('token');
    }
    setUserName(name: string) {
        this.userName = name;
    }

    getUserName() {
        return this.userName;
    }
    isAuthent() {
        if (sessionStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }
    getCurrentUser(): Observable<User> {
        return this.http.get<User>('http://194.87.237.48:5000/Users/current', {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                Authorization: `${sessionStorage.getItem('token')}`,
            }),
        });
    }
    public saveToken(token: string) {
        this.token = token;
    }
    public getToken() {
        return this.token;
    }
    public saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }

        return {};
    }
}
