import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BulletinBoardComponent } from './components/bulletin-board/bulletin-board.component';
import { LoginComponent } from './components/Authorization/login/login.component';
import { RegistrationComponent } from './components/Authorization/registration/registration.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: BulletinBoardComponent,

    // },
    {
        path: '',
        loadChildren: () =>
            import('./components/bulletin-board/bulletin-board.module').then(
                (m) => m.BulletinBoardModule
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./components/Authorization/login/login.module').then(
                (m) => m.LoginModule,
            ),
			outlet: 'modal',
    },
	{
        path: 'register',
        loadChildren: () =>
            import('./components/Authorization/registration/registration.module').then(
                (m) => m.RegistrationModule,
            ),
			outlet: 'modal',
    },
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
