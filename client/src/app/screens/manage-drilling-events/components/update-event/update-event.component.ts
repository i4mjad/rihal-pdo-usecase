import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { DrillingEvent, DrillingEventsType } from 'src/app/app.models';
import { ELEMENT_DATA } from 'src/app/fake.data';
import { GetEvent, UpdateEvent } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss'],
})
export class UpdateEventComponent implements OnInit {
  @Select(AppState.selectedEvent) event$: Observable<DrillingEvent>;
  selectedEvent!: DrillingEvent;
  selectedEventId!: string;

  updateEventFormGroup = new FormGroup({
    startDepth: new FormControl(''),
    endDepth: new FormControl(''),
    eventTypeNumber: new FormControl(0),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.selectedEventId = this.activatedRoute.snapshot.paramMap.get('id')!;

    this.store.dispatch(new GetEvent(this.selectedEventId));

    this.event$.subscribe((event) => {
      this.selectedEvent = event;
      this.updateEventFormGroup.setValue({
        startDepth: this.selectedEvent.startDepth,
        endDepth: this.selectedEvent.endDepth,
        eventTypeNumber: this.types[this.selectedEvent.eventType],
      });
    });
  }

  getEventType(index: any): string {
    return DrillingEventsType[parseInt(index)];
  }

  navigateToManageEventsPage(): void {
    this.router.navigateByUrl('/manage-drililng-events');
  }
  updateEvent(): void {
    this.store.dispatch(
      new UpdateEvent({
        id: this.selectedEventId,
        startDepth: this.updateEventFormGroup.controls['startDepth'].value,
        endDepth: this.updateEventFormGroup.controls['endDepth'].value,
        eventType: this.updateEventFormGroup.controls['eventTypeNumber'].value,
      })
    );
  }
  types = Object.values(DrillingEventsType).filter(
    (value) => typeof value === 'number'
  );
}
