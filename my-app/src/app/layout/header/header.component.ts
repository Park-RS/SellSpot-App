import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/components/Authorization/login/login.component';
import { Auth } from 'src/app/services/auth.service';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import { ModalService } from 'src/app/services/modal.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	
	
	
    constructor(private matDialog: MatDialog, private router: Router, public auth: Auth, private modal: ModalService) {}

    // public openDialog() {
    //     this.matDialog.open(LoginComponent, {
    //         width: '416px',
    //     });
    // }
	openLogin(){
		this.modal.openDialog();

	}

}
