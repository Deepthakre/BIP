import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BILCodePage } from './bil-code.page';

describe('BILCodePage', () => {
  let component: BILCodePage;
  let fixture: ComponentFixture<BILCodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BILCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
