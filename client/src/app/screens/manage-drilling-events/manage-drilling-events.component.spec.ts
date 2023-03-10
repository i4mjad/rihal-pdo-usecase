import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDrillingEventsComponent } from './manage-drilling-events.component';

describe('ManageDrillingEventsComponent', () => {
  let component: ManageDrillingEventsComponent;
  let fixture: ComponentFixture<ManageDrillingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDrillingEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDrillingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
