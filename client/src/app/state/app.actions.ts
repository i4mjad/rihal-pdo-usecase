import { DrillingEvent } from '../app.models';

export class AddEvent {
  static readonly type = '[DrillingEvent] Add';

  constructor(
    public startDepth: number,
    public endDepth: number,
    public eventType: number
  ) {}
}

export class UpdateEvent {
  static readonly type = '[DrillingEvent] Update';

  constructor(public drillingEvent: DrillingEvent) {}
}

export class DeleteEvent {
  static readonly type = '[DrillingEvent] Delete';

  constructor(public id: string) {}
}

export class GetEvent {
  static readonly type = '[DrillingEvent] Get';

  constructor(public id: string) {}
}

export class GetEvents {
  static readonly type = '[DrillingEvent] Get All';
}
