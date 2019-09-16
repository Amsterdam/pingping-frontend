import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDataConfirmationComponent } from './delete-data-confirmation.component';

describe('DeleteDataConfirmationComponent', () => {
  let component: DeleteDataConfirmationComponent;
  let fixture: ComponentFixture<DeleteDataConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDataConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDataConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
