import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDataHolderComponent } from './dashboard-data-holder.component';

describe('DashboardDataHolderComponent', () => {
  let component: DashboardDataHolderComponent;
  let fixture: ComponentFixture<DashboardDataHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDataHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDataHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
