import { SearchInputComponent } from './layout/header/components/search/search-input/search-input.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryComponent } from './layout/header/components/search/category/category.component';
import { BulletinBoardComponent } from './components/bulletin-board/bulletin-board.component';
import { LoginComponent } from './layout/header/components/Authorization/login/login.component';
import { RegistrationComponent } from './layout/header/components/Authorization/registration/registration.component';

const appRoutes: Routes = [
	{ path: '', component:BulletinBoardComponent},
    { path: 'auth', component: LoginComponent },
];
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CategoryComponent,
        SearchInputComponent,
        BulletinBoardComponent,
        LoginComponent,
        RegistrationComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
