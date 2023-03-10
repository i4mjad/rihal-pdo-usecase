import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ManageDrillingEventsComponent } from './screens/manage-drilling-events/manage-drilling-events.component';
import { ViewDrillingEventsComponent } from './screens/view-drilling-events/view-drilling-events.component';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'view-drililng-events', component: ViewDrillingEventsComponent },
  { path: 'manage-drililng-events', component: ManageDrillingEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
