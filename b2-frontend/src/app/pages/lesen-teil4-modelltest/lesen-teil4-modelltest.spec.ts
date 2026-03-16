import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesenTeil4Modelltest } from './lesen-teil4-modelltest';

describe('LesenTeil4Modelltest', () => {
  let component: LesenTeil4Modelltest;
  let fixture: ComponentFixture<LesenTeil4Modelltest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesenTeil4Modelltest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesenTeil4Modelltest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
