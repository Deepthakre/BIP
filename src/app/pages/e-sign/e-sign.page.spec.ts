import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ESignPage } from './e-sign.page';

describe('ESignPage', () => {
  let component: ESignPage;
  let fixture: ComponentFixture<ESignPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ESignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
