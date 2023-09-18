import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/components/Authorization/login/login.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private matDialog: MatDialog, private router: Router) {}
    openDialog() {
        this.matDialog.open(LoginComponent, {
            width: '416px',
        });
		
    }
}
