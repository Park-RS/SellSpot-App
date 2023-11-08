import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Advert } from '../interfaces/advert';
import { HttpClient } from '@angular/common/http';
import { AdvertisementsService } from 'src/app/services/advertisements.service';

@Component({
    selector: 'app-advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent implements OnInit {
    ProductData!: Advert;
	public productId!: any;

	// public imageArray!: any;
	// public imageArrays!: any[];
	// public  images: any[] = [];
	

    // responsiveOptions:any[] = [
    //     {
    //         breakpoint: '1024px',
    //         numVisible: 5
    //     },
    //     {
    //         breakpoint: '768px',
    //         numVisible: 3
    //     },
    //     {
    //         breakpoint: '560px',
    //         numVisible: 1
    //     }
    // ];
    
    constructor(
        private activeRoute: ActivatedRoute,
        private searchService: SearchService,


    ) {}
    ngOnInit(): void {
        // let productId = this.activeRoute.snapshot.paramMap.get('productId');
		this.activeRoute.paramMap.subscribe((params) => {
            this.productId = params.get('productId');
			console.warn(this.productId);
        this.productId &&
            this.searchService.searchById(this.productId).subscribe((response) => {
                console.warn(response);
                this.ProductData = response;
            });
		})

        

    }
	imgSrc(id:string){
		// if (!id) return '../../../assets/img/No-Image-Placeholder.svg (1).png'
		if (!id) return 'https://dummyimage.com/856x512/787678/ffffff.jpg&text=No+image'
		
		let src = `http://194.87.237.48:5000/Images/${id}`
		return src
	}
}
