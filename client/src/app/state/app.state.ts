import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DrillingEvent } from '../app.models';
import {
  AddEvent,
  UpdateEvent,
  DeleteEvent,
  GetEvent,
  GetEvents,
} from './app.actions';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AppStateModel {
  drillingEvents: DrillingEvent[];
  selectedEvent?: DrillingEvent;
}
@State<AppStateModel>({
  name: 'drillingEvents',
  defaults: {
    drillingEvents: [],
    selectedEvent: undefined,
  },
})
@Injectable()
export class AppState {
  constructor(private http: HttpClient) {}

  @Selector()
  static drillingEvents(state: AppStateModel): DrillingEvent[] {
    return state.drillingEvents;
  }

  @Selector()
  static selectedEvent(state: AppStateModel): DrillingEvent | undefined {
    return state.selectedEvent;
  }

  @Action(AddEvent)
  addEvent(ctx: StateContext<AppStateModel>, action: AddEvent) {
    return this.http.put<DrillingEvent>(
      'https://example.com/api/addEvent',
      action.drillingEvent
    );
  }

  @Action(UpdateEvent)
  updateEvent(ctx: StateContext<AppStateModel>, action: UpdateEvent) {
    return this.http.put<DrillingEvent>(
      `https://example.com/api/updateEvent/${action.drillingEvent.id}`,
      action.drillingEvent
    );
  }

  @Action(DeleteEvent)
  deleteEvent(ctx: StateContext<AppStateModel>, action: DeleteEvent) {
    return this.http.delete(`https://example.com/api/deleteEvent/${action.id}`);
  }

  @Action(GetEvent)
  getEvent(ctx: StateContext<AppStateModel>, action: GetEvent) {
    return this.http
      .get<DrillingEvent>(`https://example.com/api/getEvent/${action.id}`)
      .pipe(
        tap((event) => {
          ctx.patchState({ selectedEvent: event });
        })
      );
  }

  @Action(GetEvents)
  getEvents(ctx: StateContext<AppStateModel>) {
    return this.http
      .get<DrillingEvent[]>('https://localhost:7094/api/getEvents')
      .pipe(
        tap((events) => {
          ctx.patchState({ drillingEvents: events });
        })
      );
  }
}
