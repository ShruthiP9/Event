import { ShowStageComponent } from './components/show-stage/show-stage.component';
import { ActivatedRoute } from '@angular/router';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { StageEventListComponent } from './components/stage-event-list/stage-event-list.component';
import { EventService } from './services/event.service';
import { ExhibitionEventListComponent } from './components/exhibition-event-list/exhibition-event-list.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {RoutingModule} from './routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
      ExhibitionEventListComponent,
    StageEventListComponent,
    EventDetailsComponent,
    ShowStageComponent,

  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
