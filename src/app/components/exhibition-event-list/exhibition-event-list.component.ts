import { Event } from './../../event';
import { EVENTS } from './../../mock-event';
import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';

import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-exhibition-event-list',
  templateUrl: './exhibition-event-list.component.html',
  styleUrls: ['./exhibition-event-list.component.css']
})
export class ExhibitionEventListComponent implements OnInit {

  Exevents: Event[];

  constructor(private eService: EventService) {
    this.Exevents = this.eService.events;

  }

  ngOnInit() {
  } }