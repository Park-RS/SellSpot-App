import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinBoardComponent } from './bulletin-board.component';
import { BulletinRoutingModule } from './bulletin-routing.module';

@NgModule({
    declarations: [BulletinBoardComponent],
    imports: [CommonModule, BulletinRoutingModule],
    exports: [BulletinBoardComponent],
})
export class BulletinBoardModule {}
