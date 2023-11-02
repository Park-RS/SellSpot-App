import { SearchService } from './../../services/search.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewAdvertisementModule } from './new-advertisement.module';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from '../interfaces/category';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    public main_categories!: Category[];
	public categorySelected!: string; 
    public subcategoriies!: Category[];
	public subCategorySelected!: string;
	public undersubcategoriies!:Category[];
	public underSubCategorySelected!: string;
    public categ: any[] | undefined;
    public secondCatehories!: Category[];
    subcategories: string[] = [];
    selectedCategory!: string;
    selectedSubcategory!: string;
    defaultParentCategoryId: any = '00000000-0000-0000-0000-000000000000';
	defaultCategoryName: any = 'Выберите категорию'
    value?: any;

    uploadedFiles: any[] = [];
    suggestions: string[] = [];
    constructor(
        private fb: FormBuilder,
        private searchService: SearchService,
        public category: CategoriesService,
        private http: HttpClient
    ) {}
    newAd: UntypedFormGroup = new UntypedFormGroup({});
    ngOnInit(): void {
        this.newAd = this.fb.group({
            ad_category: ['', [Validators.required]],
            ad_name: ['', [Validators.required]],
            comment: ['', [Validators.required]],
            ad_phone: ['', [Validators.required]],
            adress: ['', [Validators.required]],
            ad_image: ['', [Validators.required]],
            ad_price: ['', [Validators.required]],
        });
        this.category.getCategories().subscribe((response) => {
            this.categories = response.childs;
            this.main_categories = this.categories;
            // console.log(this.value);

            // this.categ = this.categories.filter((category) => category.parentId == this.defaultParentCategoryId && category.name !== 'Anything' && category.name !== 'Default');

            // console.log(this.categ);
            // this.secondCatehories = this.categories.filter((category)=> category.id)
            // this.categ = response.childs;
            // console.log(this.categ);
        });
    }
    onSelectedMain(category: any) {
		
		this.undersubcategoriies = []
        this.category.getAllWithIdCategories(category).subscribe((data) => {
            this.subcategoriies = data.childs;
            console.log(this.subcategoriies);
        });
    }
	onSelectedSub(category:any)
	{
		this.category.getAllWithIdCategories(category).subscribe((resp)=>
		{
			this.undersubcategoriies = resp.childs;
			console.log(this.undersubcategoriies);
			
		})
	}
	onSelectedUnderSub(category:any){}

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
    // createAdvert() {
    //     this.http
    //         .post('http://194.87.237.48:5000/Advert', {
    //             categoryId: this.newAd.get('ad_category')?.value,
    //             name: this.newAd.get('ad_name')?.value,
    //             location: this.newAd.get('adress')?.value,
    //             description: this.newAd.get('comment')?.value,
    //             images: this.newAd.get('ad_image')?.value,
    //             cost: this.newAd.get('ad_price')?.value,
    //         })
    //         .subscribe((response) => {
    //             console.log(response);
    //         });
    // }
    createAdvert() {
        const formdata = new FormData();
        formdata.append('Name', this.newAd.value.ad_name);
        formdata.append('CategoryId', this.newAd.value.ad_category);
        formdata.append('Location', this.newAd.value.adress);
        formdata.append('Phone', this.newAd.value.ad_phone);
        formdata.append('Cost', this.newAd.value.ad_price);
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
    }
    // onUpload(event) {
    //     for(let file of event.files) {
    //         this.uploadedFiles.push(file);
    //     }
    // }

    // countries: any[] | undefined;
    // selectedCity: any;
}
