import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcontentPageComponent } from './studentcontent-page.component';

describe('StudentcontentPageComponent', () => {
  let component: StudentcontentPageComponent;
  let fixture: ComponentFixture<StudentcontentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcontentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcontentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
