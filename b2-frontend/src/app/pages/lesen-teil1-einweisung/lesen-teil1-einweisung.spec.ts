import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesenTeil1Einweisung } from './lesen-teil1-einweisung';

describe('LesenTeil1Einweisung', () => {
  let component: LesenTeil1Einweisung;
  let fixture: ComponentFixture<LesenTeil1Einweisung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesenTeil1Einweisung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesenTeil1Einweisung);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
