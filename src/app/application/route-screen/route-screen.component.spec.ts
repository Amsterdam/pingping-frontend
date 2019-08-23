import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteScreenComponent } from './route-screen.component';

describe('RouteScreenComponent', () => {
  let component: RouteScreenComponent;
  let fixture: ComponentFixture<RouteScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
