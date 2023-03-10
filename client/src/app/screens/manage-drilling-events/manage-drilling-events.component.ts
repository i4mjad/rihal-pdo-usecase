import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrillingEventsType } from './DrillingEventsType';
import { ELEMENT_DATA } from 'src/app/fake.data';

@Component({
  selector: 'app-manage-drilling-events',
  templateUrl: './manage-drilling-events.component.html',
  styleUrls: ['./manage-drilling-events.component.scss'],
})
export class ManageDrillingEventsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToAddEventPage(): void {
    this.router.navigateByUrl('/add-drililng-event');
  }

  navigateToUpdateEventPage(id: string): void {
    this.router.navigateByUrl(`/update-drililng-event/${id}`);
  }
  deleteEvent(id: string): void {
    //TODO: dispatch the delete action
  }

  getEventType(index: any): string {
    return DrillingEventsType[parseInt(index)];
  }
}
