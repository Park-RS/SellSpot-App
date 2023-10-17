import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	cat: string[] = []
    constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        private matDialog: MatDialog,
        private _httpClient: HttpClient,
        private auth: Auth,
        private fb: FormBuilder,
		private router: Router,
		private category: CategoriesService,
    ) {}
    formLogin: UntypedFormGroup = new UntypedFormGroup({});
    ngOnInit() {
        this.formLogin = this.fb.group({
            login: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
		this.category.getCategories().subscribe((response) =>
		{
			this.cat = response;
			console.log(this.cat);
			
		})
		
	
		
		
		// console.log(this.auth.getCurrentUser());
		// const ad = this.auth.getCurrentUser();
		// console.log(ad);
		
		
		
		
	
    }
    close() {
        this.dialogRef.close();
    }

    Auth() {
        this.auth
            .login(
                this.formLogin.get('login')?.value,
                this.formLogin.get('password')?.value
				
            )
            .subscribe((response) => {
				this.router.navigate([''])
				this.dialogRef.close();
				
			});
			
			console.log(this.auth.getCurrentUser());
			
    }

    openDialog() {
        this.matDialog.open(RegistrationComponent, {
            width: '416px',
        });

        this.dialogRef.close();
    }
}
