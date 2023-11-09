import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { ShowPhoneComponent } from './components/show-phone/show-phone.component';

@NgModule({
    declarations: [
    ShowPhoneComponent
  ],
    imports: [CommonModule, AdvertisementRoutingModule],
})
export class AdvertisementModule {}
