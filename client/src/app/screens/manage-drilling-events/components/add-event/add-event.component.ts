import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DrillingEventsType } from 'src/app/app.models';
import { Store } from '@ngxs/store';
import { AddEvent } from 'src/app/state/app.actions';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  addEventFormGroup = new FormGroup({
    startDepth: new FormControl(''),
    endDepth: new FormControl(''),
    eventTypeNumber: new FormControl(0),
  });

  types = Object.values(DrillingEventsType).filter(
    (value) => typeof value === 'number'
  );
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  getEventType(index: any): string {
    return DrillingEventsType[parseInt(index)];
  }

  navigateToManageEventsPage(): void {
    this.router.navigateByUrl('/manage-drililng-events');
  }
  addEvent(): void {
    this.store.dispatch(
      new AddEvent(
        this.addEventFormGroup.controls['startDepth'].value,
        this.addEventFormGroup.controls['endDepth'].value,
        this.addEventFormGroup.controls['eventTypeNumber'].value
      )
    );
  }
}
