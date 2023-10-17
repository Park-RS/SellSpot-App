import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CategoriesService {
    constructor(private http: HttpClient) {}
    getCategories(): Observable<any> {
        return this.http.get<any>(
            'http://194.87.237.48:5000/Categories/00000000-0000-0000-0000-000000000000'
        );
    }
}
