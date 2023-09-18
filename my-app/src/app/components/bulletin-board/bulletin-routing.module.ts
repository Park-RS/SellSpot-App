import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinBoardComponent } from './bulletin-board.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: BulletinBoardComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BulletinRoutingModule {}
