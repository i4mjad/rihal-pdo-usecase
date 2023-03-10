import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DrillingEventsType } from 'src/app/app.models';

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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getEventType(index: any): string {
    return DrillingEventsType[parseInt(index)];
  }

  navigateToManageEventsPage(): void {
    this.router.navigateByUrl('/manage-drililng-events');
  }
  addEvent(): void {
    //TODO: Dispatch the add action here
    console.log(this.addEventFormGroup.value);
  }
}
