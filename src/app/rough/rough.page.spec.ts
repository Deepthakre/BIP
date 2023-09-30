import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoughPage } from './rough.page';

describe('RoughPage', () => {
  let component: RoughPage;
  let fixture: ComponentFixture<RoughPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoughPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
