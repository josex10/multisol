import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpservice1Component } from './cmpservice1.component';

describe('Cmpservice1Component', () => {
  let component: Cmpservice1Component;
  let fixture: ComponentFixture<Cmpservice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmpservice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpservice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
