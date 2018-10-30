import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValleysComponent } from './valleys.component';

describe('ValleysComponent', () => {
  let component: ValleysComponent;
  let fixture: ComponentFixture<ValleysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValleysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValleysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
