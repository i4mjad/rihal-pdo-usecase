import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  DrillingEvent,
  GetDrillingEventResponse,
  GetDrillingEventsResponse,
} from '../app.models';
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
    return this.http.put<DrillingEvent>('https://localhost:7094/addEvent', {
      startDepth: action.startDepth,
      endDepth: action.endDepth,
      eventType: action.eventType,
    });
  }

  @Action(UpdateEvent)
  updateEvent(ctx: StateContext<AppStateModel>, action: UpdateEvent) {
    return this.http.put<DrillingEvent>(
      `https://localhost:7094/updateEvent/${action.drillingEvent.id}`,
      {
        startDepth: action.drillingEvent.startDepth,
        endDepth: action.drillingEvent.endDepth,
        eventNumber: action.drillingEvent.eventType,
      }
    );
  }

  @Action(DeleteEvent)
  deleteEvent(ctx: StateContext<AppStateModel>, action: DeleteEvent) {
    return this.http
      .delete(`https://localhost:7094/deleteEvent/${action.id}`)
      .pipe(
        tap(() => {
          const state = ctx.getState();
          const filteredItems = state.drillingEvents.filter(
            (item) => item.id !== action.id
          );
          ctx.patchState({ drillingEvents: filteredItems });
        })
      );
  }

  @Action(GetEvent)
  getEvent(ctx: StateContext<AppStateModel>, action: GetEvent) {
    return this.http
      .get<GetDrillingEventResponse>(
        `https://localhost:7094/getEvent/${action.id}`
      )
      .pipe(
        tap((response) => {
          ctx.patchState({ selectedEvent: response.drillingEvent });
        })
      );
  }

  @Action(GetEvents)
  getEvents(ctx: StateContext<AppStateModel>) {
    return this.http
      .get<GetDrillingEventsResponse>('https://localhost:7094/getAllEvents')
      .pipe(
        tap((response) => {
          ctx.patchState({ drillingEvents: response.drillingEvents });
        })
      );
  }
}
