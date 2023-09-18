import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        private matDialog: MatDialog
    ) {}
    close() {
        this.dialogRef.close();
    }

    openDialog() {
        this.matDialog.open(RegistrationComponent, {
            width: '416px',
        });

        this.dialogRef.close();
    }
}
