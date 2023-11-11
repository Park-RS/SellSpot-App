import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';
import { Message } from 'primeng/api/message';





@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
	messages: Message[] | undefined;

    constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        private matDialog: MatDialog,
        private auth: Auth,
        private fb: FormBuilder,
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
		setTimeout(() => {
			location.reload()
		}, 1000);
    }

    openDialog() {
        this.matDialog.open(RegistrationComponent, {
            width: '416px',
        });

        this.dialogRef.close();
    }
}
