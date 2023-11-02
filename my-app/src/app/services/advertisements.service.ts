import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor(private http: HttpClient) {}
  getAdvert(value: string):Observable<any[]>{
	return this.http.post<any[]>('http://194.87.237.48:5000/Advert/search',
	{
		search: value,
	})
  }
}
