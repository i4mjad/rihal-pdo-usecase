import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageDrillingEventsComponent } from './screens/manage-drilling-events/manage-drilling-events.component';
import { HomeComponent } from './screens/home/home.component';
import { ViewDrillingEventsComponent } from './screens/view-drilling-events/view-drilling-events.component';
import { AddEventComponent } from './screens/manage-drilling-events/components/add-event/add-event.component';
import { UpdateEventComponent } from './screens/manage-drilling-events/components/update-event/update-event.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ManageDrillingEventsComponent,
    HomeComponent,
    ViewDrillingEventsComponent,
    AddEventComponent,
    UpdateEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
