import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ModalService } from 'src/app/services/modal.service';

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
