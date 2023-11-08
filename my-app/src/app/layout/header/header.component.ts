import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/app/components/interfaces/advert';
import { Auth } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ModalService } from 'src/app/services/modal.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    isActive: boolean = false;
	searchResult!: Advert[]
	showSuggestions:boolean = false;

	

    userName: any = this.auth.getCurrentUser().subscribe((response) => {
        this.userName = response.name;
    });
    // isAuth = this.auth.isAuthent()

    constructor(
        public auth: Auth,
        private modal: ModalService,
        public categoriesService: CategoriesService,
		public route: Router,
		private searchService: SearchService
    ) {}
    ngOnInit(): void {

    }

    openLogin() {
        this.modal.openDialog();
    }
    logOut() {
        this.auth.logOut();
    }
    getCategoriestList() {}
    menuIsActive() {
        this.isActive = !this.isActive;
    }
	submitSearch(val:string){
		const lowercaseVal = val.toLowerCase();
		this.route.navigate([`search/${lowercaseVal}`])
	}
	hideSearch(){
		setTimeout(() => {
			this.showSuggestions = false;
		}, 100);
		
		
	}
	showSearch(){
		
		this.showSuggestions = true;
	}
	searchProduct(query: KeyboardEvent){
		
		if (query)
		{
			const elem = query.target as HTMLInputElement;
			this.searchService.search(elem.value).subscribe((resp) =>
			{
				if (resp.length>5) {
					resp.length=5;
				}
				this.searchResult = resp;
				

			})
		}
	}
	selectSuggestion(suggestion:string){
		let selectedValue = suggestion;
		let searchInput = document.getElementById('searchInput') as HTMLInputElement;
		searchInput.value = selectedValue
		this.searchResult = []
	}
	

}
