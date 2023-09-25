import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./components/bulletin-board/bulletin-board.module').then(
                (m) => m.BulletinBoardModule
            ),
    },
    {
        title: 'Авторизация',
        path: 'login',
        loadChildren: () =>
            import('./components/Authorization/login/login.module').then(
                (m) => m.LoginModule
            ),	
			outlet: 'modal',
    },
    {
		title: 'Регистрация',
        path: 'register',
        loadChildren: () =>
            import(
                './components/Authorization/registration/registration.module'
            ).then((m) => m.RegistrationModule),
			outlet: 'modal',
    },
	{
        title: 'Новое объявление',
        path: 'new-advertisement',
        loadChildren: () =>
            import('./components/new-advertisement/new-advertisement.module').then(
                (m) => m.NewAdvertisementModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
