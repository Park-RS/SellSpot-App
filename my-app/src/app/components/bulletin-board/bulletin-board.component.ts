import { Component, OnInit } from '@angular/core';
import { AdvertisementsService } from 'src/app/services/advertisements.service';
import { Advert } from '../interfaces/advert';

@Component({
    selector: 'app-bulletin-board',
    templateUrl: './bulletin-board.component.html',
    styleUrls: ['./bulletin-board.component.scss'],
})
export class BulletinBoardComponent implements OnInit {
    public link!: string;
    public product!: Array<Advert>;
	public image!: any[];
    constructor(private advertService: AdvertisementsService) {}
    ngOnInit(): void {
        this.advertService.getAdvert('').subscribe((data) => {
            this.product = data;
			
        });
		
    }
	

}
