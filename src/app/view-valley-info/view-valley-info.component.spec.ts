import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewValleyInfoComponent } from './view-valley-info.component';

describe('ViewValleyInfoComponent', () => {
  let component: ViewValleyInfoComponent;
  let fixture: ComponentFixture<ViewValleyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewValleyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewValleyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
