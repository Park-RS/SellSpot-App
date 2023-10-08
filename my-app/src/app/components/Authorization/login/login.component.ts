import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        private matDialog: MatDialog,
        private _httpClient: HttpClient,
        private auth: Auth,
        private fb: FormBuilder,
		private router: Router,
    ) {}
    formLogin: UntypedFormGroup = new UntypedFormGroup({});
    ngOnInit() {
        this.formLogin = this.fb.group({
            login: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
		console.log(this.auth.getCurrentUser());
		
	
    }
    close() {
        this.dialogRef.close();
    }
    // Auth(): void {
    //     this._httpClient
    //         .post('http://194.87.237.48:5000/Auth/Login', {
    //             login: this.formLogin.get('login')?.value,
    //             password: this.formLogin.get('password')?.value,
    //         })
    //         .subscribe((response: any) => {
    //             console.log(response)
    // 			localStorage.setItem('token',response)
    //         })
    // }
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
    }

    openDialog() {
        this.matDialog.open(RegistrationComponent, {
            width: '416px',
        });

        this.dialogRef.close();
    }
}
