import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CandidatOffreComponent } from './candidat-offre.component';

describe('CandidatOffreComponent', () => {
  let component: CandidatOffreComponent;
  let fixture: ComponentFixture<CandidatOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
