import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAdvertisementsComponent } from './user-advertisements.component';

const routes: Routes = [
	{
        path: '',
		component: UserAdvertisementsComponent
        
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdvertisementsRoutingModule { }