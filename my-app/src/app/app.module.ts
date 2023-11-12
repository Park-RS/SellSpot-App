import { SearchInputComponent } from './components/search/search-input/search-input.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryComponent } from './components/search/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BulletinBoardModule } from './components/bulletin-board/bulletin-board.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { PasswordModule } from 'primeng/password';
import { CardComponent } from './components/card/card.component';
import { CategoriesComponent } from './layout/header/components/categories/categories.component';
import { BulletinBoardComponent } from './components/bulletin-board/bulletin-board.component';
import { UserAdvertisementsComponent } from './components/user-advertisements/user-advertisements.component';
import { AuthModule } from './components/Authorization/auth.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CategoryComponent,
        SearchInputComponent,
        UserSettingsComponent,
        CardComponent,
        CategoriesComponent,
        BulletinBoardComponent,
        UserAdvertisementsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BulletinBoardModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule,
        HttpClientModule,
        MatMenuModule,
        PasswordModule,
		AuthModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
