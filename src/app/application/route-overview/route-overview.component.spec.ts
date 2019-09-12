import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteOverviewComponent } from './route-overview.component';

describe('RouteOverviewComponent', () => {
  let component: RouteOverviewComponent;
  let fixture: ComponentFixture<RouteOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
