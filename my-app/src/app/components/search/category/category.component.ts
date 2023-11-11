import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { Advert } from '../../interfaces/advert';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
	public product!: Array<Advert>;
	public query: any;
	constructor(private activateRoute: ActivatedRoute, private categoryServ: CategoriesService, private route: Router){}
	ngOnInit(): void {
        this.activateRoute.paramMap.subscribe((params) => {
            this.query = params.get('query');
            this.query &&
                this.categoryServ.getAllWithIdCategories(this.query).subscribe((result) => {
                    this.product = result.childs;
                });
        });
        // this.query = this.activateRoute.snapshot.paramMap.get('query');
    }
	getMainCategoriesSearch(){
		
	}
	getSubCategoriesSearch(){}
	getUnderSubCategoriesSearch(){}
	submitSearch(val:string){
		const lowercaseVal = val.toLowerCase();
		this.route.navigate([`category/${lowercaseVal}`])
	}

}
