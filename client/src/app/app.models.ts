export interface DrillingEvent {
  id: string;
  eventType: number;
  startDepth: number;
  endDepth: number;
}

export enum DrillingEventsType {
  StuckPipe,
  MudLoss,
  CirculationLoss,
  DrillBit,
}

export interface GetDrillingEventsResponse {
  drillingEvents: DrillingEvent[];
}
export interface GetDrillingEventResponse {
  drillingEvent: DrillingEvent;
}
