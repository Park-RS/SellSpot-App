import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-advertisements',
    templateUrl: './user-advertisements.component.html',
    styleUrls: ['./user-advertisements.component.scss'],
})
export class UserAdvertisementsComponent {
    constructor(private router: Router) {}
    newCard() {
        this.router.navigateByUrl('new-advertisement');
    }
}
