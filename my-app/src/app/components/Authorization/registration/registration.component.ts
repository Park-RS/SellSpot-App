import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
    public login: string = '';
    public name: string = '';
    public password: string = '';

    constructor(
        public dialogRef: MatDialogRef<RegistrationComponent>,
        private _httpClient: HttpClient
    ) {}
    close() {
        this.dialogRef.close();
    }
    userCreate(): void {
        const userCreateData = {
            login: this.login,
            name: this.name,
            password: this.password,
        };

        this._httpClient
            .post('http://194.87.237.48:5000/Auth/Register', userCreateData)
            .subscribe((response) => {
                console.log('Test', response);
            });
    }
}
