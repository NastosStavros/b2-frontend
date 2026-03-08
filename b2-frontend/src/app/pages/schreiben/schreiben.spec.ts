import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Schreiben } from './schreiben';

describe('Schreiben', () => {
  let component: Schreiben;
  let fixture: ComponentFixture<Schreiben>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Schreiben]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Schreiben);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
