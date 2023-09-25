import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAdvertisementComponent } from './new-advertisement.component';

const routes: Routes = [
	{
        path: '',
        component: NewAdvertisementComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAdvertisementRoutingModule { }
