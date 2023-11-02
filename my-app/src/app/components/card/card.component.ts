import { Component, Input, OnInit } from '@angular/core';
import { AdvertisementsService } from 'src/app/services/advertisements.service';
import { Advert } from '../interfaces/advert';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() product!: Advert
    public link!: string;

	
    constructor() {}
	
}
