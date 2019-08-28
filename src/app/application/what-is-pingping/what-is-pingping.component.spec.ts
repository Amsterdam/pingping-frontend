import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsPingpingComponent } from './what-is-pingping.component';

describe('WhatIsPingpingComponent', () => {
  let component: WhatIsPingpingComponent;
  let fixture: ComponentFixture<WhatIsPingpingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsPingpingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsPingpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
