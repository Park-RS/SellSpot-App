import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Advert } from 'src/app/components/interfaces/advert';

@Component({
  selector: 'app-show-phone',
  templateUrl: './show-phone.component.html',
  styleUrls: ['./show-phone.component.scss'],

})
export class ShowPhoneComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
		
		
	}

}
