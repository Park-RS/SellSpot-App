import { SearchInputComponent } from './components/search/search-input/search-input.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryComponent } from './components/search/category/category.component';
import { RegistrationComponent } from './components/Authorization/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BulletinBoardModule } from './components/bulletin-board/bulletin-board.module';
import { NewAdvertisementComponent } from './components/new-advertisement/new-advertisement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/Authorization/login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CategoryComponent,
        SearchInputComponent,
        RegistrationComponent,
        NewAdvertisementComponent,
		LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BulletinBoardModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        DropdownModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
