import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sprechen } from './sprechen';

describe('Sprechen', () => {
  let component: Sprechen;
  let fixture: ComponentFixture<Sprechen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sprechen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sprechen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
