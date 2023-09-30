import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealationAapasmeinPage } from './realation-aapasmein.page';

describe('RealationAapasmeinPage', () => {
  let component: RealationAapasmeinPage;
  let fixture: ComponentFixture<RealationAapasmeinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RealationAapasmeinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
