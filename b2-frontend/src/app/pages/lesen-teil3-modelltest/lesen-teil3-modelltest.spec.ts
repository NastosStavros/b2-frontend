import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesenTeil3Modelltest } from './lesen-teil3-modelltest';

describe('LesenTeil3Modelltest', () => {
  let component: LesenTeil3Modelltest;
  let fixture: ComponentFixture<LesenTeil3Modelltest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesenTeil3Modelltest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesenTeil3Modelltest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
