import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoerenTeil1Modelltest } from './hoeren-teil1-modelltest';

describe('HoerenTeil1Modelltest', () => {
  let component: HoerenTeil1Modelltest;
  let fixture: ComponentFixture<HoerenTeil1Modelltest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoerenTeil1Modelltest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoerenTeil1Modelltest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
