import { Component, Input, OnInit } from '@angular/core';
import { AdvertisementsService } from 'src/app/services/advertisements.service';
import { Advert, UserAdvert } from '../interfaces/advert';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() product!: UserAdvert
   

	
    constructor() {}
	imgSrc(id:string){
		// if (!id) return '../../../assets/img/No-Image-Placeholder.svg (1).png'
		if (!id) return 'https://dummyimage.com/306x240/787678/ffffff.jpg&text=No+image'
		let src = `http://194.87.237.48:5000/Images/${id}`
		return src
	}
	
	
}
