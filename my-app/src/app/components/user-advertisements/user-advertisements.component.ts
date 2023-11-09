import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/services/auth.service';
import { Advert, UserAdvert } from '../interfaces/advert';

@Component({
    selector: 'app-user-advertisements',
    templateUrl: './user-advertisements.component.html',
    styleUrls: ['./user-advertisements.component.scss'],
})
export class UserAdvertisementsComponent implements OnInit {
    public UserAdverts: Array<UserAdvert> | undefined;
    ngOnInit(): void {
        this.authService.getCurrentUser().subscribe((resp) => {
            this.UserAdverts = resp.adverts;
            console.log(this.UserAdverts);
        });
    }
    constructor(private router: Router, private authService: Auth) {}
    newCard() {
        this.router.navigateByUrl('new-advertisement');
    }
    imgSrc(id: string) {
        // if (!id) return '../../../assets/img/No-Image-Placeholder.svg (1).png'
        if (!id)
            return 'https://dummyimage.com/306x240/787678/ffffff.jpg&text=No+image';
        let src = `http://194.87.237.48:5000/Images/${id}`;
        return src;
    }
}
