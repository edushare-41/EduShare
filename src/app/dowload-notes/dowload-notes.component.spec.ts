import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloadNotesComponent } from './dowload-notes.component';

describe('DowloadNotesComponent', () => {
  let component: DowloadNotesComponent;
  let fixture: ComponentFixture<DowloadNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowloadNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowloadNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
