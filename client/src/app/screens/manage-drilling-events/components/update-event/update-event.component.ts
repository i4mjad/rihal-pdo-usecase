import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { DrillingEvent, DrillingEventsType } from 'src/app/app.models';
import { ELEMENT_DATA } from 'src/app/fake.data';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss'],
})
export class UpdateEventComponent implements OnInit {
  selectedEvent!: DrillingEvent;
  selectedEventId!: string;

  updateEventFormGroup = new FormGroup({
    startDepth: new FormControl(''),
    endDepth: new FormControl(''),
    eventTypeNumber: new FormControl(0),
  });

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //   //TODO: remove this
    this.selectedEventId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.selectedEvent = ELEMENT_DATA.filter(
      (x) => (x.id = this.selectedEventId)
    )[0];

    console.log(this.selectedEvent);

    this.updateEventFormGroup.setValue({
      startDepth: this.selectedEvent.startDepth,
      endDepth: this.selectedEvent.endDepth,
      eventTypeNumber: this.types[this.selectedEvent.eventType],
    });
  }

  getEventType(index: any): string {
    return DrillingEventsType[parseInt(index)];
  }

  navigateToManageEventsPage(): void {
    this.router.navigateByUrl('/manage-drililng-events');
  }
  addEvent(): void {
    //TODO: Dispatch
    console.log(this.updateEventFormGroup.value);
  }
  types = Object.values(DrillingEventsType).filter(
    (value) => typeof value === 'number'
  );
}
