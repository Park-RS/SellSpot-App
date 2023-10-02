import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { HttpClient } from '@angular/common/http';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    // login = '';
    // password = '';

    constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        private matDialog: MatDialog,
        private _httpClient: HttpClient,
        private auth: Auth,
        private fb: FormBuilder
    ) {}
    formLogin: UntypedFormGroup = new UntypedFormGroup({});
    ngOnInit() {
        this.formLogin = this.fb.group({
            login: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    close() {
        this.dialogRef.close();
    }
    Auth(): void {
        this._httpClient
            .post('http://194.87.237.48:5000/Auth/Login', {
                login: this.formLogin.get('login')?.value,
                password: this.formLogin.get('password')?.value,
            })
            .subscribe((response: any) => {
                console.log(response)
				localStorage.setItem('token',response)
            })
    }


    openDialog() {
        this.matDialog.open(RegistrationComponent, {
            width: '416px',
        });

        this.dialogRef.close();
    }
}
