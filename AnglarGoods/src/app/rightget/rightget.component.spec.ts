import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightgetComponent } from './rightget.component';

describe('RightgetComponent', () => {
  let component: RightgetComponent;
  let fixture: ComponentFixture<RightgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
