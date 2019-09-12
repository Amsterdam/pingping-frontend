import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportConfirmationComponent } from './import-confirmation.component';

describe('ImportConfirmationComponent', () => {
  let component: ImportConfirmationComponent;
  let fixture: ComponentFixture<ImportConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
