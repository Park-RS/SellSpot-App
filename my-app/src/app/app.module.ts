import { SearchInputComponent } from './components/search/search-input/search-input.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryComponent } from './components/search/category/category.component';
import { RegistrationComponent } from './components/Authorization/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BulletinBoardModule } from './components/bulletin-board/bulletin-board.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CategoryComponent,
        SearchInputComponent,
        RegistrationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
		BulletinBoardModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
	
}
