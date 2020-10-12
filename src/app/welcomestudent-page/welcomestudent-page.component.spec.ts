import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomestudentPageComponent } from './welcomestudent-page.component';

describe('WelcomestudentPageComponent', () => {
  let component: WelcomestudentPageComponent;
  let fixture: ComponentFixture<WelcomestudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomestudentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomestudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
