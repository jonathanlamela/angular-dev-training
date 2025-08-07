import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggler } from './button-toggler';

describe('ButtonToggler', () => {
  let component: ButtonToggler;
  let fixture: ComponentFixture<ButtonToggler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonToggler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
