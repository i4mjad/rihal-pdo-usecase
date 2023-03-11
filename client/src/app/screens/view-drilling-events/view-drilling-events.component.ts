import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DrillingEvent, DrillingEventsType } from 'src/app/app.models';
import { GetEvents } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-view-drilling-events',
  templateUrl: './view-drilling-events.component.html',
  styleUrls: ['./view-drilling-events.component.scss'],
})
export class ViewDrillingEventsComponent implements OnInit {
  @Select(AppState.drillingEvents) events$: Observable<DrillingEvent[]>;
  constructor(private store: Store) {}

  data: any;
  ngOnInit(): void {
    this.store.dispatch(new GetEvents());
    this.events$.subscribe((events) => {
      this.data = events.map((event) => {
        return {
          name: 'Events',
          eventName: this.getEventName(event.eventType),
          startDepth: event.startDepth,
          endDepth: event.endDepth,
          columnSettings: {
            fill: this.getEventColor(event.eventType),
            width: this.getEventWidth(event.eventType),
          },
        };
      });
    });
  }

  getEventName(eventNumber: number) {
    return DrillingEventsType[eventNumber];
  }
  getEventWidth(eventNumber: number) {
    if (eventNumber === 0) {
      // StuckPipe
      return am5.percent(100);
    } else if (eventNumber === 1) {
      //MudLoss
      return am5.percent(50);
    } else if (eventNumber === 2) {
      //CirculationLoss
      return am5.percent(25);
    }
    return am5.percent(100);
  }
  getEventColor(eventNumber: number) {
    if (eventNumber === 0) {
      // StuckPipe
      return 'red';
    } else if (eventNumber === 1) {
      //MudLoss
      return 'gray';
    } else if (eventNumber === 2) {
      //CirculationLoss
      return 'black';
    }
    return 'black';
  }
}
