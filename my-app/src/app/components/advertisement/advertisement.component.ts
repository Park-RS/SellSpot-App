import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Advert } from '../interfaces/advert';
import { HttpClient } from '@angular/common/http';
import { AdvertisementsService } from 'src/app/services/advertisements.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowPhoneComponent } from './components/show-phone/show-phone.component';

@Component({
    selector: 'app-advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent implements OnInit {
	@Input()
    images: any[] | undefined;
	public ProductData!: Advert;
    public productId!: any;
	

	

    // public imageArray!: any;
    // public imageArrays!: any[];
    // public  images: any[] = [];

    constructor(
        private activeRoute: ActivatedRoute,
        private searchService: SearchService,
        private advertService: AdvertisementsService,
		public dialog: MatDialog,
		

    ) {}
    ngOnInit(): void {
        // let productId = this.activeRoute.snapshot.paramMap.get('productId');
        this.activeRoute.paramMap.subscribe((params) => {
            this.productId = params.get('productId');
            console.warn(this.productId);
            this.productId &&
                this.searchService
                    .searchById(this.productId)
                    .subscribe((response) => {
                        console.warn(response);
                        this.ProductData = response;
                        this.images = this.ProductData.imagesIds;
                    });
        });
		
    }
    imgSrc(id: string) {
        // if (!id) return '../../../assets/img/No-Image-Placeholder.svg (1).png'
        if (!id)
            return 'https://dummyimage.com/856x512/787678/ffffff.jpg&text=No+image';
        let src = `http://194.87.237.48:5000/Images/${id}`;
        return src;
    }
    openDialog(){
		this.dialog.open(ShowPhoneComponent,
			{
				data:{
					phone: `${this.ProductData.phone}`
				}

			}
			)

	}
	// imgGal(id: string) {
	// 	return this.advertService.getImages(id)
	// }
}
