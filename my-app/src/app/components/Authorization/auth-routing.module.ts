import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/Authorization/login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
        path: 'login',
		title:'Логин',
        component: LoginComponent,
    },
	{
		path: 'register',
		title:'Регистрация',
		component: RegistrationComponent
	}
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
