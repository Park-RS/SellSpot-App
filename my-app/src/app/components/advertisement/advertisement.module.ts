import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { ShowPhoneComponent } from './components/show-phone/show-phone.component';
import { AdvertisementComponent } from './advertisement.component';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
    ShowPhoneComponent,
	AdvertisementComponent
  ],
    imports: [CommonModule, AdvertisementRoutingModule, GalleriaModule, ButtonModule],
})
export class AdvertisementModule {}
