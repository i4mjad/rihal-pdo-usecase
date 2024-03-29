import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Selector, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DrillingEvent, DrillingEventsType } from 'src/app/app.models';

import { ELEMENT_DATA } from 'src/app/fake.data';
import { DeleteEvent, GetEvents } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-manage-drilling-events',
  templateUrl: './manage-drilling-events.component.html',
  styleUrls: ['./manage-drilling-events.component.scss'],
})
export class ManageDrillingEventsComponent implements OnInit {
  @Select(AppState.drillingEvents) events$: Observable<DrillingEvent[]>;
  dataSource: DrillingEvent[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetEvents());
    this.events$.subscribe((events) => {
      this.dataSource = events;
    });
  }

  navigateToAddEventPage(): void {
    this.router.navigateByUrl('/add-drililng-event');
  }

  navigateToUpdateEventPage(id: string): void {
    this.router.navigateByUrl(`/update-drililng-event/${id}`);
  }
  deleteEvent(id: string): void {
    this.store.dispatch(new DeleteEvent(id));
  }

  getEventType(index: any): string {
    return DrillingEventsType[parseInt(index)];
  }
}
