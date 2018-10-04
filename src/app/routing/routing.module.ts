import { EventDetailsComponent } from './../components/event-details/event-details.component';
import { ShowStageComponent } from './../components/show-stage/show-stage.component';
import { StageEventListComponent } from './../components/stage-event-list/stage-event-list.component';
import { ExhibitionEventListComponent } from './../components/exhibition-event-list/exhibition-event-list.component';
import { EventService } from './../services/event.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';``



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      //{path:'course',component:CourseComponent},
      //{path:'power',component:PowerComponent},
      {path:'exhibition-event-list',component:ExhibitionEventListComponent},
      {path:'stage-event-list',component:StageEventListComponent},
      {path:'eventDetails/:ename',component:EventDetailsComponent},
      {path:'show-stage/:sname',component:ShowStageComponent}
     
 
     
    ])
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
