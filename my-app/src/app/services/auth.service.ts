import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { User } from '../components/interfaces/user';

const TOKEN_KEY = 'AuthToken';
@Injectable({
    providedIn: 'root',
})
export class Auth {
    isAuthenticated: boolean = false;
    public userName: string = '';
    private token!: string;

    constructor(private http: HttpClient) {}

    login(login: string, password: string) {
        return this.http
            .post('http://194.87.237.48:5000/Auth/Login', {
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
    // getCurrentUser(): any {
	// 	const user = sessionStorage.getItem('token')
		
	// 	if (user) {
	// 		return this.http
    //         .get('http://194.87.237.48:5000/Users/current').pipe(
	// 			switchMap((user) => {
	// 				const name = user.name || '';
	// 				localStorage.setItem('user-name', JSON.stringify(name));
	// 				this.currUsernameSource.next(name);
	// 				return of(user);
	// 			  }));
			
    //         // .subscribe((response) => {
	// 		// 	return response
                
    //         // });
	// 	}
		
        
    // }
	
	private currUsernameSource = new BehaviorSubject<string>('');
	currUsername = this.currUsernameSource.asObservable();
	getCurrentUser(): Observable<User>{
		return this.http.get<User>('http://194.87.237.48:5000/Users/current').pipe(
		  switchMap((user) => {
		  const name = user.name || '';
		  localStorage.setItem('user-name', JSON.stringify(name));
		  this.currUsernameSource.next(name);
		  return of(user);
		}));
	  }
	
	
    public saveToken(token: string) {
        this.token = token
    }
    public getToken() {
        return this.token
    }
}
