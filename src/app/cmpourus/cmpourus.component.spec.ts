import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpourusComponent } from './cmpourus.component';

describe('CmpourusComponent', () => {
  let component: CmpourusComponent;
  let fixture: ComponentFixture<CmpourusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpourusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpourusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
