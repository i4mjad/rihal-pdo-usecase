import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDrillingEventsComponent } from './view-drilling-events.component';

describe('ViewDrillingEventsComponent', () => {
  let component: ViewDrillingEventsComponent;
  let fixture: ComponentFixture<ViewDrillingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDrillingEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDrillingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
