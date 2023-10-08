import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/components/Authorization/login/login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Auth } from 'src/app/services/auth.service';
import { RegistrationComponent } from 'src/app/components/Authorization/registration/registration.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	UsEr: any = ''
    constructor(private matDialog: MatDialog, private router: Router, public auth: Auth, ) {}
	ngOnInit(): void {
		// this.UsEr = this.auth.getUserName();

		
	}

	
	
	
	

    public openDialog() {
        this.matDialog.open(LoginComponent, {
            width: '416px',
        });
    }
}
