import { SearchService } from './../../services/search.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewAdvertisementModule } from './new-advertisement.module';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from '../interfaces/category';
import { Observable, map, tap } from 'rxjs';

interface City {
    name: string;
    code: string;
}
@Component({
    templateUrl: './new-advertisement.component.html',
    styleUrls: ['./new-advertisement.component.scss'],
})
export class NewAdvertisementComponent implements OnInit {
    cat!: Array<Category>;
    selectedParentCategory!: Category;
    public categories!: Category[];
    subcategories: string[] = [];
    selectedCategory!: string;
    selectedSubcategory!: string;

    uploadedFiles: any[] = [];
    suggestions: string[] = [];
    constructor(
        private fb: FormBuilder,
        private searchService: SearchService,
        public category: CategoriesService
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
        this.category.getCategories().subscribe((response) => {
            this.categories = response.childs;
        });
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

    //   selectParentCategory(event) {
    // 	const categoryId = event.value;
    // 	this.apiService.getSubcategories(categoryId).subscribe(subcategories => {
    // 	  this.subcategories = subcategories;
    // 	  this.childCategoryControl.setValue(null); // Очищаем значение второго dropdown
    // 	});
    //   }

    selectCategory(value: string): Array<Category> {
        return (this.cat = this.cat.filter((obj) => obj.parentId == value));

        // this.category.getCategories().subscribe((response) =>
        // {
        // 	console.log(response);

        // 	this.cat = this.cat.filter((data) =>
        // 	{
        // 		console.log(data == value);

        // 	})
        // })
        // this.category.getCategories().subscribe((response) =>
        // {

        // 	return this.cat = this.cat.filter((data =>{
        // 		console.log(data.parentId);

        // 	}))

        // })
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
