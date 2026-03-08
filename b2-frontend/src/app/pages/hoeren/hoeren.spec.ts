import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoeren } from './hoeren';

describe('Hoeren', () => {
  let component: Hoeren;
  let fixture: ComponentFixture<Hoeren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoeren]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hoeren);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
