import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDataPopupComponent } from './delete-data-popup.component';

describe('DeleteDataPopupComponent', () => {
  let component: DeleteDataPopupComponent;
  let fixture: ComponentFixture<DeleteDataPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDataPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDataPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
