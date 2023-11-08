import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { isAuthGuard } from './guards/is-auth.guard';

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
            import(
                './components/new-advertisement/new-advertisement.module'
            ).then((m) => m.NewAdvertisementModule),
        canActivate: [isAuthGuard],
    },
    {
        title: 'Настройки',
        path: 'settings',
        loadChildren: () =>
            import(
                './components/user-settings/user-settings.module'
            ).then((m) => m.UserSettingsModule),
        canActivate: [isAuthGuard],
    },
	{
        title: 'Мои объявления',
        path: 'user-advertisements',
        loadChildren: () =>
            import(
                './components/user-advertisements/user-advertisements.module'
            ).then((m) => m.UserAdvertisementsModule),
        canActivate: [isAuthGuard],
    },
	{
        title: 'Объявление',
        path: 'product/:productId',
        loadChildren: () =>
            import(
                './components/advertisement/advertisement.module'
            ).then((m) => m.AdvertisementModule),
        
    },
	{
        title: 'Поиск',
        path: 'search/:query',
        loadChildren: () =>
            import(
                './components/search/search-input/search-input.module'
            ).then((m) => m.SearchInputModule),
        
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
