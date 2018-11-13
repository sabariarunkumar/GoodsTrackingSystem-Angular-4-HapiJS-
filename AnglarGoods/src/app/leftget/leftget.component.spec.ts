import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftgetComponent } from './leftget.component';

describe('LeftgetComponent', () => {
  let component: LeftgetComponent;
  let fixture: ComponentFixture<LeftgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
