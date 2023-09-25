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
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';




@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CategoryComponent,
        SearchInputComponent,
        RegistrationComponent,
		NewAdvertisementComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BulletinBoardModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
		FormsModule,
		CascadeSelectModule,
		InputTextModule,
		InputTextareaModule,
		InputNumberModule,
		DropdownModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
