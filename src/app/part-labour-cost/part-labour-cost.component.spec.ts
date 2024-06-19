import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLabourCostComponent } from './part-labour-cost.component';

describe('PartLabourCostComponent', () => {
  let component: PartLabourCostComponent;
  let fixture: ComponentFixture<PartLabourCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartLabourCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartLabourCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
