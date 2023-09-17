import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { BulletinBoardComponent } from '../../bulletin-board/bulletin-board.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
    constructor(public dialogRef: MatDialogRef<LoginComponent>) {}
    close() {
        this.dialogRef.close();
    }
}
