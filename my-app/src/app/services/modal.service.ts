import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/Authorization/login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    constructor(private matDialog: MatDialog) {}
    public openDialog() {
        this.matDialog.open(LoginComponent, {
            width: '416px',
        });
    }
}
