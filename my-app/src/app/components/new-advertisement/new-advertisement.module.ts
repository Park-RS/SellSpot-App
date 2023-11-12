import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdvertisementRoutingModule } from './new-advertisement-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { NewAdvertisementComponent } from './new-advertisement.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations: [NewAdvertisementComponent],
    imports: [
        CommonModule,
        NewAdvertisementRoutingModule,
        FileUploadModule,
        InputNumberModule,
        ReactiveFormsModule,
        InputTextareaModule,
        InputTextModule,
    ],
})
export class NewAdvertisementModule {}
