import { EventService } from './../../services/event.service';
import { Event } from './../../event';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector:'app-show-stage',
  templateUrl: './show-stage.component.html',
  styleUrls: ['./show-stage.component.css']
})
export class ShowStageComponent implements OnInit {

  eventObj: Event;
  event2: Event[];
  constructor(private route: ActivatedRoute, private eService: EventService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      let eveName =params.get('sname');
      this.eventObj=this.eService.getEvent(eveName);
    });
    this.event2 = this.eService.events;
  }
}
