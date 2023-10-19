import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from '../../interfaces/category';

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
        private category: CategoriesService
    ) {}
    formLogin: UntypedFormGroup = new UntypedFormGroup({});
    ngOnInit() {
        this.formLogin = this.fb.group({
            login: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
        // this.category.getCategories().subscribe((response) =>
        // {
        // })
        // console.log(this.auth.getCurrentUser());
        // const user = this.auth.getCurrentUser();
        // console.log(user);
    }
    close() {
        this.dialogRef.close();
    }

    Auth() {
        if (this.formLogin.valid) {
            this.auth
                .login(
                    this.formLogin.get('login')?.value,
                    this.formLogin.get('password')?.value
                )
                .subscribe(() => {
                    this.auth.getCurrentUser().subscribe((resp) => {
                        console.log(resp);
                        this.dialogRef.close();
                    });
                });
        }
    }

    openDialog() {
        this.matDialog.open(RegistrationComponent, {
            width: '416px',
        });

        this.dialogRef.close();
    }
}
