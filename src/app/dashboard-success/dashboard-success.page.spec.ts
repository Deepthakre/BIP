import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardSuccessPage } from './dashboard-success.page';

describe('DashboardSuccessPage', () => {
  let component: DashboardSuccessPage;
  let fixture: ComponentFixture<DashboardSuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
