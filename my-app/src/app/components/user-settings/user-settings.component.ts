import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
    userSettingsForm: UntypedFormGroup = new UntypedFormGroup({});
    userChangePass: UntypedFormGroup = new UntypedFormGroup({});
    constructor(private fb: FormBuilder) {}
    ngOnInit(): void {
        this.userSettingsForm = this.fb.group({
            user_name: [''],
            user_phone: [''],
            user_address: [''],
        });
        this.userChangePass = this.fb.group({
            user_currentPass: ['', [Validators.required]],
            user_newPass: ['', [Validators.required]],
        });
    }
}
