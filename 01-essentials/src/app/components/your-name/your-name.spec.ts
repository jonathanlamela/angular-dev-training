import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourName } from './your-name';

describe('YourName', () => {
  let component: YourName;
  let fixture: ComponentFixture<YourName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
