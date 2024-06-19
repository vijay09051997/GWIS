import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCliamHistoryComponent } from './detail-cliam-history.component';

describe('DetailCliamHistoryComponent', () => {
  let component: DetailCliamHistoryComponent;
  let fixture: ComponentFixture<DetailCliamHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCliamHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCliamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
