import { Event } from './../../event';
import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventObj: Event;
  event1: Event[];
  constructor(private route: ActivatedRoute, private eService: EventService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      let eveName = params.get('ename');
      this.eventObj = this.eService.getEvent(eveName);
    });
    this.event1 = this.eService.events;
  }
}
