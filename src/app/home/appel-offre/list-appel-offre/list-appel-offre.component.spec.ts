import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListAppelOffreComponent } from './list-appel-offre.component';

describe('ListAppelOffreComponent', () => {
  let component: ListAppelOffreComponent;
  let fixture: ComponentFixture<ListAppelOffreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAppelOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
