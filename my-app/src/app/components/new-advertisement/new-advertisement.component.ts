import { SearchService } from './../../services/search.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewAdvertisementModule } from './new-advertisement.module';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from '../interfaces/category';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FileRemoveEvent, FileSelectEvent } from 'primeng/fileupload';
import { AdvertisementsService } from 'src/app/services/advertisements.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './new-advertisement.component.html',
    styleUrls: ['./new-advertisement.component.scss'],
})
export class NewAdvertisementComponent implements OnInit {
    public categories!: Category[];
    public main_categories!: Category[];
    public subcategoriies!: Category[];
    public undersubcategoriies!: Category[];
    subcategories: string[] = [];
    defaultParentCategoryId: any = '00000000-0000-0000-0000-000000000000';
    defaultCategoryName: any = 'Выберите категорию';
	public mainCategoriesSelected: boolean = false;
	public subCategoriesSelected: boolean = false;
	
    FilesArray: { url: string; file: File; size: number; name: string }[] = [];
    suggestions: string[] = [];
    constructor(
        private fb: FormBuilder,
        private searchService: SearchService,
        public category: CategoriesService,
        private http: HttpClient,
        private advertService: AdvertisementsService,
        private router: Router
    ) {
        this._CreateAdvert();
    }
    newAd: UntypedFormGroup = new UntypedFormGroup({});
    ngOnInit(): void {
        this.category.getCategories().subscribe((response) => {
            this.categories = response.childs;
            this.main_categories = this.categories;
        });
        if (this.newAd.value.secondCategorySelect) {
            console.log(this.newAd.value.secondCategorySelect);
        }
		
		if (this.newAd.get('secondCategorySelect')!.value) {
			this.subCategoriesSelected = !this.subCategoriesSelected
			
		}
    }
    _CreateAdvert() {
        this.newAd = this.fb.group({
            firstCategorySelect: ['', [Validators.required]],
            secondCategorySelect: ['', [Validators.required]],
            thirdCategorySelect: '',
            ad_name: ['', [Validators.required]],
            comment: '',
            ad_phone: ['', [Validators.required]],
            adress: ['', [Validators.required]],
            ad_image: this.FilesArray,
            ad_price: ['', [Validators.required]],
        });
    }
    onChange(event: Event) {
        const category = (event.target as HTMLSelectElement).value;
        this.onSelectedMain(category);
        this.newAd.get('firstCategorySelect')?.setValue(category);
        console.log(this.newAd.get('firstCategorySelect')?.value);
        // console.log(this.newAd.get('adress')?.value);
		
    }
    onSubChange(event: Event) {
        const subCategory = (event.target as HTMLSelectElement).value;
        this.onSelectedSub(subCategory);
        this.newAd.get('secondCategorySelect')?.setValue(subCategory);
        console.log(this.newAd.get('secondCategorySelect')?.value);

    }
    onUnderSubChange(event: Event) {
        const underSubCategory = (event.target as HTMLSelectElement).value;
        this.newAd.get('thirdCategorySelect')?.setValue(underSubCategory);
        console.log(this.newAd.get('thirdCategorySelect')?.value);
    }
    onSelectedMain(category: string) {
        this.undersubcategoriies = [];
        this.category.getAllWithIdCategories(category).subscribe((data) => {
            this.subcategoriies = data.childs;
            console.log(this.subcategoriies);
        });
		
    }
    onSelectedSub(category: string) {
        this.category.getAllWithIdCategories(category).subscribe((resp) => {
            this.undersubcategoriies = resp.childs;
            console.log(this.undersubcategoriies);
        });
    }
    onFileSelect(event: any) {
        if (event.target.files && event.target.files[0]) {
            for (const file of event.target.files) {
                const reader = new FileReader();
                reader.onload = (e: any) => {
                    if (this.FilesArray.length < 10) {
                        this.FilesArray.push({
                            url: e.target.result,
                            file,
                            size: file.size / 1024,
                            name: file.name,
                        });
                    } else {
                        console.log('more then 10 imgs prohibited');
                    }
                };
                reader.readAsDataURL(file);
            }
        }// https://www.youtube.com/watch?v=U_mMkkcd8GE
        //   this.newAd.patchValue({
        // 	ad_image: this.FilesArray
        //   });
        for (let file of this.FilesArray) {
            console.log('Images', file.file);
        }

        //   if (files && files!.length>0) {
        // 	for(let i = 0; i < this.FilesArray.length; i++) {
        // 	  console.log('Images', files[i]);
        // 	}
        // }
    }
    deleteImage(i: any) {
        this.FilesArray.splice(i, 1);
    }
    onSelectedUnderSub(category: any) {}
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
    getSubcategories(categoryId: string): Observable<Category[]> {
        return this.category.getCategories().pipe(
            map((response: Category[]) => {
                this.subcategories = [];
                const parentCategory = response.find(
                    (category) => category.id === categoryId
                );
                if (parentCategory && parentCategory.childs) {
                    // this.subcategories = parentCategory.childs;
                    return parentCategory.childs;
                }
                return [];
            })
        );
    }

    createAdvert() {
        if (this.newAd.valid) {
            let files = (<HTMLInputElement>document.getElementById('images'))
                .files;
            const formdata = new FormData();
            formdata.append('name', this.newAd.get('ad_name')?.value);

            formdata.append('location', this.newAd.get('adress')?.value);
            formdata.append('phone', this.newAd.get('ad_phone')?.value);
            formdata.append('cost', this.newAd.get('ad_price')?.value);
            formdata.append('description', this.newAd.get('comment')?.value);

            if (this.newAd.get('thirdCategorySelect')!.value) {
                formdata.append(
                    'categoryId',
                    this.newAd.get('thirdCategorySelect')!.value
                );
            } else {
                formdata.append(
                    'categoryId',
                    this.newAd.get('secondCategorySelect')!.value
                );
            }

            if (files && files!.length > 0) {
                for (let file of this.FilesArray) {
                    formdata.append('Images', file.file);
                }
            }
            this.advertService.CreateAd(formdata).subscribe();
            this.router.navigate(['']);
        }
    }
}
