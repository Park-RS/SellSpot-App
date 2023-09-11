import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinBoardComponent } from './bulletin-board.component';

describe('BulletinBoardComponent', () => {
  let component: BulletinBoardComponent;
  let fixture: ComponentFixture<BulletinBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinBoardComponent]
    });
    fixture = TestBed.createComponent(BulletinBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
