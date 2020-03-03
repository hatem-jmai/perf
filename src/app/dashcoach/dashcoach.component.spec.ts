import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcoachComponent } from './dashcoach.component';

describe('DashcoachComponent', () => {
  let component: DashcoachComponent;
  let fixture: ComponentFixture<DashcoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashcoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
