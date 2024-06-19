import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimRefServiceComponent } from './claim-ref-service.component';

describe('ClaimRefServiceComponent', () => {
  let component: ClaimRefServiceComponent;
  let fixture: ComponentFixture<ClaimRefServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimRefServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimRefServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
