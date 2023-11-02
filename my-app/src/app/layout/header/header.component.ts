import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/interfaces/category';
import { Auth } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ModalService } from 'src/app/services/modal.service';
import { Observable } from 'rxjs';
import { AdvertisementsService } from 'src/app/services/advertisements.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    isActive: boolean = false;

    userName: any = this.auth.getCurrentUser().subscribe((response) => {
        this.userName = response.name;
    });
    // isAuth = this.auth.isAuthent()

    constructor(
        public auth: Auth,
        private modal: ModalService,
        public categoriesService: CategoriesService,
		private advertService: AdvertisementsService,
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
}
