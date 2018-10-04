import { EventService } from './../../services/event.service';
import { EVENTS } from './../../mock-event';
import { Event } from './../../event';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stage-event-list',
  templateUrl: './stage-event-list.component.html',
  styleUrls: ['./stage-event-list.component.css']
})
export class StageEventListComponent implements OnInit {
  Stagevents:Event[];

  constructor(private eService:EventService) { }

  ngOnInit() {
    this.Stagevents=this.eService.events;
  }

}
