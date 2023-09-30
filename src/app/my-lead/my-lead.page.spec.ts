import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyLeadPage } from './my-lead.page';

describe('MyLeadPage', () => {
  let component: MyLeadPage;
  let fixture: ComponentFixture<MyLeadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyLeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
