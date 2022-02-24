import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditusersComponent } from './editusers.component';

describe('EditusersComponent', () => {
  let component: EditusersComponent;
  let fixture: ComponentFixture<EditusersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
