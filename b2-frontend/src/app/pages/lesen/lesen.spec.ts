import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesen } from './lesen';

describe('Lesen', () => {
  let component: Lesen;
  let fixture: ComponentFixture<Lesen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
