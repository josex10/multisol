import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpcontactComponent } from './cmpcontact.component';

describe('CmpcontactComponent', () => {
  let component: CmpcontactComponent;
  let fixture: ComponentFixture<CmpcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
