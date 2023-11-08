import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Advert } from '../../interfaces/advert';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
    searchResult: undefined | Advert[];
    public product!: Array<Advert>;
    public query!: any;
    constructor(
        private activateRoute: ActivatedRoute,
        private searchService: SearchService
    ) {}
    ngOnInit(): void {
        this.activateRoute.paramMap.subscribe((params) => {
            this.query = params.get('query');
            this.query &&
                this.searchService.search(this.query).subscribe((result) => {
                    this.product = result;
                });
        });
        // this.query = this.activateRoute.snapshot.paramMap.get('query');
    }

}
