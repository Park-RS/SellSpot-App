import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private apiKey = '90a51a79-dca6-4451-929e-eac3fb9cf8df';
    private url = 'https://suggest-maps.yandex.ru/v1/suggest';
    constructor(private http: HttpClient) {}

    getSuggestions(text: any): Observable<any> {
        const params = new HttpParams()
            .set('apikey', this.apiKey)
            .set('text', text)
            .set('lang', 'RU')
            .set('results', '5')
            .set('print_address', '1')
            .set(
                'types',
                'biz,street,,metro,,district,locality,area,province,country,house'
            );
        return this.http.get(this.url, { params });
    }
    search(value: string): Observable<any[]> {
        return this.http.post<any[]>(
            'http://194.87.237.48:5000/Advert/search',
            {
                search: value,
            }
        );
    }
	searchById(id:string):Observable<any>{
		return this.http.get<any>(`http://194.87.237.48:5000/Advert/${id}`)
	}
}
