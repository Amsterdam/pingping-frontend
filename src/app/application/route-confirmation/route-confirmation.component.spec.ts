import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteConfirmationComponent } from './route-confirmation.component';

describe('RouteConfirmationComponent', () => {
  let component: RouteConfirmationComponent;
  let fixture: ComponentFixture<RouteConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
