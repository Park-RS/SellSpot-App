import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Advert } from '../interfaces/advert';
import { HttpClient } from '@angular/common/http';
import { AdvertisementsService } from 'src/app/services/advertisements.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowPhoneComponent } from './components/show-phone/show-phone.component';
import { imageSrcCreator } from '../Imgcreatefunc/img-create-func';
import { GalleriaResponsiveOptions } from 'primeng/galleria';

@Component({
    selector: 'app-advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent implements OnInit {
	@Input()
    public images!: string[] 
	public ProductData!: Advert;
    public productId!: any;
	

	public responsiveOptions: any[] = [
		{
		  breakpoint: '1024px',
		  numVisible: 5
		},
		{
		  breakpoint: '768px',
		  numVisible: 3
		},
		{
		  breakpoint: '560px',
		  numVisible: 1
		}
	  ];

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
                        if (this.ProductData.imagesIds.length) {
							// this.images = this.ProductData.imagesIds.map((id) => imageSrcCreator(id))
							this.images = this.ProductData.imagesIds.map((id) => imageSrcCreator(id))
							
						}
						else{
							this.images = [imageSrcCreator()]
						}
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
