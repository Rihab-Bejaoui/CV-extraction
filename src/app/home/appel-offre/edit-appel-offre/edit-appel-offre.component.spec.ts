import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditAppelOffreComponent } from './edit-appel-offre.component';

describe('EditAppelOffreComponent', () => {
  let component: EditAppelOffreComponent;
  let fixture: ComponentFixture<EditAppelOffreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppelOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
