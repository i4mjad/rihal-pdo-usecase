import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ManageDrillingEventsComponent } from './screens/manage-drilling-events/manage-drilling-events.component';
import { ViewDrillingEventsComponent } from './screens/view-drilling-events/view-drilling-events.component';
import { MaterialModule } from './material/material.module';
import { AddEventComponent } from './screens/manage-drilling-events/components/add-event/add-event.component';
import { UpdateEventComponent } from './screens/manage-drilling-events/components/update-event/update-event.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'view-drililng-events', component: ViewDrillingEventsComponent },
  { path: 'manage-drililng-events', component: ManageDrillingEventsComponent },
  { path: 'add-drililng-event', component: AddEventComponent },
  { path: 'update-drililng-event/:id', component: UpdateEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
