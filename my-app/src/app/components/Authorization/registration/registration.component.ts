import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    registerForm: UntypedFormGroup = new UntypedFormGroup({});
    ngOnInit(): void {
        this.registerForm = this.fb.group({
            login: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[ 0-9]+$')]],
            name: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    constructor(
        public dialogRef: MatDialogRef<RegistrationComponent>,
        private _httpClient: HttpClient,
        private fb: FormBuilder
    ) {}
    close() {
        this.dialogRef.close();
    }
    userCreate(): void {
        this._httpClient
            .post('http://194.87.237.48:5000/Auth/Register', {
                login: this.registerForm.get('login')?.value,
                name: this.registerForm.get('name')?.value,
                password: this.registerForm.get('password')?.value,
            })
            .subscribe((response) => {
                console.log(response);
            });
    }
	get login()
	{
		return this.registerForm.get('login');
	}
	get password()
	{
		return this.registerForm.get('password');
	}
	get name()
	{
		return this.registerForm.get('name');
	}
}
