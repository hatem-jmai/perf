import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradclientComponent } from './dashboradclient.component';

describe('DashboradclientComponent', () => {
  let component: DashboradclientComponent;
  let fixture: ComponentFixture<DashboradclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
