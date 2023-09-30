import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgrementPage } from './agrement.page';

describe('AgrementPage', () => {
  let component: AgrementPage;
  let fixture: ComponentFixture<AgrementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgrementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
