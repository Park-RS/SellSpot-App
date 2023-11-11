import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../interfaces/user';

@Component({
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
	UserId!: User;
    userSettingsForm: UntypedFormGroup = new UntypedFormGroup({});
    userChangePass: UntypedFormGroup = new UntypedFormGroup({});
    constructor(private fb: FormBuilder, private userService: UserService, private authService: Auth) {}
    ngOnInit(): void {
        this.userSettingsForm = this.fb.group({
            user_name: '',
            user_phone: [''],
            user_address: [''],
        });
        this.userChangePass = this.fb.group({
            user_currentPass: ['', [Validators.required]],
            user_newPass: ['', [Validators.required]],
        });
		this.authService.getCurrentUser().subscribe((resp) =>
		{
			this.UserId = resp
			console.log(resp);
			
			this.userSettingsForm.get('user_name')?.setValue(this.UserId.name)
		})
		
    }
	changePass(){
		console.log(this.userChangePass.get('user_currentPass')?.value);
		const formdata = new FormData();
		formdata.append('password', this.userChangePass.get('user_newPass')?.value)
		formdata.append('name', this.userSettingsForm.get('user_name')?.value)
		formdata.append('login', this.userSettingsForm.get('user_phone')?.value)
		this.userService.userChangePass(formdata, this.UserId.id).subscribe(() =>
		{
			console.log("password changes successfully");
			

		})
		
		
	}
}

