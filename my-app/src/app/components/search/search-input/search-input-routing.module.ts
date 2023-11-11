import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchInputComponent } from './search-input.component';
import { CategoriesComponent } from 'src/app/layout/header/components/categories/categories.component';

const routes: Routes = [
	{
        path: '',
        component: SearchInputComponent,
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchInputRoutingModule { }