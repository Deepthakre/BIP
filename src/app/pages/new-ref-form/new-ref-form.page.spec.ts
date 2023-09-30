import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewRefFormPage } from './new-ref-form.page';

describe('NewRefFormPage', () => {
  let component: NewRefFormPage;
  let fixture: ComponentFixture<NewRefFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewRefFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
