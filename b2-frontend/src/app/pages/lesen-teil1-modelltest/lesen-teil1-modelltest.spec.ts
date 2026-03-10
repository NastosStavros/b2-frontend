import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesenTeil1Modelltest } from './lesen-teil1-modelltest';

describe('LesenTeil1Modelltest', () => {
  let component: LesenTeil1Modelltest;
  let fixture: ComponentFixture<LesenTeil1Modelltest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesenTeil1Modelltest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesenTeil1Modelltest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
