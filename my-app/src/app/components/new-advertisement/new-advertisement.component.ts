import { SearchService } from './../../services/search.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewAdvertisementModule } from './new-advertisement.module';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

interface City {
    name: string;
    code: string;
}
@Component({
    templateUrl: './new-advertisement.component.html',
    styleUrls: ['./new-advertisement.component.scss'],
})
export class NewAdvertisementComponent implements OnInit {
    uploadedFiles: any[] = [];
    suggestions: string[] = [];

    cities: City[] | undefined;
    selectedCity: City | undefined;
    value3: string | undefined;
    constructor(
        private fb: FormBuilder,
        private searchService: SearchService
    ) {}
    newAd: UntypedFormGroup = new UntypedFormGroup({});
    ngOnInit(): void {
        this.newAd = this.fb.group({
            ad_category: ['', [Validators.required]],
            ad_name: ['', [Validators.required]],
            comment: ['', [Validators.required]],
            adress: ['', [Validators.required]],
            ad_image: ['', [Validators.required]],
            ad_price: ['', [Validators.required]],
        });
        this.cities = [
            { name: 'Техника', code: 'TECH' },
            { name: 'Красота и здоровье', code: 'B&H' },
            { name: 'Одежда', code: 'CL' },
        ];
    }
    onTextChange() {
        const text = this.newAd.get('adress')?.value;
        this.searchService.getSuggestions(text).subscribe(
            (response) => {
				// console.log(response);
				
                this.suggestions = [];
                if (response && Array.isArray(response.results)) {
                    for (const result of response.results) {
						
                        this.suggestions.push(result.address.formatted_address);
                    }
                }
            },
            (error) => {
                console.error('Ошибка при получении подсказок:', error);
            }
        );
    }
    setSuggestion(suggestion: string) {
		this.newAd.get('adress')?.setValue(suggestion);
		this.suggestions = [];
    }

    // onUpload(event) {
    //     for(let file of event.files) {
    //         this.uploadedFiles.push(file);
    //     }
    // }

    // countries: any[] | undefined;
    // selectedCity: any;

    value1: number | undefined;
}
