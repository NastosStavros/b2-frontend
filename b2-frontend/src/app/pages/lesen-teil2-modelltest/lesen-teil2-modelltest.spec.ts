import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesenTeil2Modelltest } from './lesen-teil2-modelltest';

describe('LesenTeil2Modelltest', () => {
  let component: LesenTeil2Modelltest;
  let fixture: ComponentFixture<LesenTeil2Modelltest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesenTeil2Modelltest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesenTeil2Modelltest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
