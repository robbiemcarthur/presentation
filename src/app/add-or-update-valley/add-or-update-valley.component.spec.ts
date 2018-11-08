import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateValleyComponent } from './add-or-update-valley.component';

describe('AddOrUpdateValleyComponent', () => {
  let component: AddOrUpdateValleyComponent;
  let fixture: ComponentFixture<AddOrUpdateValleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateValleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
