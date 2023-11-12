import { userSettingsRoutingModule } from './user-settings-routing.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';






@NgModule({
    declarations: [],
    imports: [CommonModule, userSettingsRoutingModule, ButtonModule, InputTextModule, PasswordModule],
})
export class UserSettingsModule {}