import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
    public main_categories!: Category[];
    public subCategories!: Category[];
    MainParentCategoryId: string = '00000000-0000-0000-0000-000000000000';
    public categorySelected!: string;
    public underSubCategories!: Category[];
    public isActive: boolean = false;
    constructor(public categoriesService: CategoriesService) {}
    ngOnInit(): void {
        this.categoriesService
            .getAllWithIdCategories(this.MainParentCategoryId)
            .subscribe((response) => {
                this.main_categories = response.childs;
                // console.log(this.main_categories);
            });
    }
    getSubCategories(categoryId: any) {
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
}
