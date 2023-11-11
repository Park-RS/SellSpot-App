import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  userChangePass(formdata: FormData, id: any): Observable<any>
  {
	return this.http.put(`http://194.87.237.48:5000/Users/${id}`, formdata, 
	{
		headers: new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
			Authorization: `${sessionStorage.getItem('token')}`,
		}),
	})

  }

}
