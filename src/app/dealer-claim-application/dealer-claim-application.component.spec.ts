import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerClaimApplicationComponent } from './dealer-claim-application.component';

describe('DealerClaimApplicationComponent', () => {
  let component: DealerClaimApplicationComponent;
  let fixture: ComponentFixture<DealerClaimApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerClaimApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerClaimApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
