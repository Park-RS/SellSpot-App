import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advert } from '../components/interfaces/advert';

@Injectable({
    providedIn: 'root',
})
export class AdvertisementsService {
    constructor(private http: HttpClient) {}
    getAdvert(value: string): Observable<any[]> {
        return this.http.post<any[]>(
            'http://194.87.237.48:5000/Advert/search',
            {
                search: value,
            }
        );
    }
    getAdvertbyCategory(value: string): Observable<any[]> {
        return this.http.post<any[]>(
            'http://194.87.237.48:5000/Advert/search',
            {
                category: value,
            }
        );
    }
    getImages(id: string): Observable<any[]> {
        return this.http.get<any[]>(`http://194.87.237.48:5000/Images/${id}`);
    }
    CreateAd(formdata: FormData): Observable<Advert> {
        return this.http.post<any>(
            'http://194.87.237.48:5000/Advert',
            formdata,
            {
                headers: new HttpHeaders({
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `${sessionStorage.getItem('token')}`,
                }),
            }
        );
    }
}
