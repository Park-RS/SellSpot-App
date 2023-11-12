import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/components/interfaces/advert';
import { Category } from 'src/app/components/interfaces/category';
import { AdvertisementsService } from 'src/app/services/advertisements.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { map } from 'rxjs';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
	public test!:string;
    public maincat!: string;
	public maincatid!: any[];
    public subcat: any;
    public main_categories!: Category[];
    public subCategories!: Category[];
    MainParentCategoryId: string = '00000000-0000-0000-0000-000000000000';
    public categorySelected!: string;
    public underSubCategories!: Category[];
    public isActive: boolean = false;
    constructor(
        public categoriesService: CategoriesService,
        private advertServ: AdvertisementsService
    ) {}
    ngOnInit(): void {
        this.categoriesService
            .getAllWithIdCategories(this.MainParentCategoryId)
            .subscribe((response) => {
                this.main_categories = response.childs;
				
                // this.maincat = this.main_categories;
                // console.log(this.main_categories);
            });
    }

    getSubCategories(categoryId: any) {
		this.underSubCategories=[]
        this.categoriesService
            .getAllWithIdCategories(categoryId)
            .subscribe((data) => {
                this.subCategories = data.childs;
                // console.log(this.subCategories);
            });
    }
    getUnderSubCategories(categoryId: any) {
        this.categoriesService
            .getAllWithIdCategories(categoryId)
            .subscribe((data) => {
                this.underSubCategories = data.childs;
                // console.log(this.underSubCategories);
            });
    }
    getMainSearchCategories(val: any) {
        this.advertServ.getAdvertbyCategory(val).subscribe((resp)=>
		{
			
			
		})
		this.categoriesService.getAllWithIdCategories(val).subscribe((data)=>
		{
			this.maincat = data.childs.map((item: {id:string}) => item.id)
			console.log(this.maincat);
			this.advertServ.getAdvertbyCategory(this.maincat).subscribe()
			
			
		})
    }
    getSubSearchCategories(val:any) {
        this.advertServ.getAdvertbyCategory(val).subscribe((resp)=>
		{
			console.log(resp);
			
		})
		this.categoriesService.getAllWithIdCategories(val).subscribe((data)=>
		{

			this.advertServ.getAdvertbyCategory(data.childs.id).subscribe((resp)=>
		{
			console.log(resp);
			
		})
			console.log(data.childs);
			
		})
		
    }
    getUnderSubSearchCategories(val: any) {
        this.advertServ.getAdvertbyCategory(val).subscribe((resp) => {
            console.log(resp);
        });
    }
}
