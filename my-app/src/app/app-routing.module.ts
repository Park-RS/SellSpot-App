import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BulletinBoardComponent } from './components/bulletin-board/bulletin-board.component';
import { LoginComponent } from './components/Authorization/login/login.component';

const routes: Routes = [
    { path: '', component: BulletinBoardComponent },
    { path: 'auth', component: LoginComponent, outlet:'modal'},
	{ path: 'register', component: LoginComponent, outlet:'modal'},
];
	
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
