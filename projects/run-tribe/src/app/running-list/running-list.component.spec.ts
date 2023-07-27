import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningListComponent } from './running-list.component';

describe('RunningListComponent', () => {
  let component: RunningListComponent;
  let fixture: ComponentFixture<RunningListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunningListComponent]
    });
    fixture = TestBed.createComponent(RunningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
