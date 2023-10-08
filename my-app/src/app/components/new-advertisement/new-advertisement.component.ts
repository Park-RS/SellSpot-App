import { Component, OnInit } from '@angular/core';
import { NewAdvertisementModule } from './new-advertisement.module';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

interface City {
    name: string,
    code: string
}
@Component({
    templateUrl: './new-advertisement.component.html',
    styleUrls: ['./new-advertisement.component.scss'],
})

export class NewAdvertisementComponent{
	
	
	cities: City[];
    selectedCity: City | undefined;
	value3: string | undefined;
	
    // countries: any[] | undefined;
    // selectedCity: any;
	
	value1: number | undefined;
	constructor(private fb: FormBuilder) {
		this.cities = [
            {name: 'Техника', code: 'TECH'},
            {name: 'Красота и здоровье', code: 'B&H'},
            {name: 'Одежда', code: 'CL'},
        ];
	}
	newAd: UntypedFormGroup = new UntypedFormGroup({});

	
    // ngOnInit() {
    //     this.cities = [
    //         {
    //             name: 'Техника',
    //             code: '',
                
    //         },
    //         {
    //             name: 'Красота и здоровье',
    //             code: '',
                
    //         },
    //         {
    //             name: 'Одежда',
    //             code: '',
                
    //         },
    //     ];
    // }
}
