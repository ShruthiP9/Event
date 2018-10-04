import { EVENTS } from './../mock-event';
import { Event } from './../event';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  events:Event[];

  constructor() {
    this.events= EVENTS;
   }

getEvent(ename:string):Event{
  for(let i=0;i<this.events.length;i++)
  {
    if(ename=="Mike's Literature Fest"){
      return this.events[i];
    }else if(ename=='Rock music and Anime'){
      return this.events[i+1];
    }else if(ename=="RE's Royal enclave on Travel"){
      return this.events[i+2];
    }else if(ename=='Geek party - Hack 2k18'){
      return this.events[i+3];
    }else if(ename=='Carnival in Rio de Janeiro'){
      return this.events[i+4];
    }else if(ename=="Munich's world-famous Oktoberfest"){
      return this.events[i+5];
    }else if(ename=='Cannes Film Festival'){
      return this.events[i+6];
    }else if(ename=='Glastonbury'){
      return this.events[i+7];
    }else if(ename=='Just For Laughs'){
      return this.events[i+8];
    }else if(ename=='Epcot Food & Wine Festival'){
      return this.events[i+9];
    }else if(ename=='Mevlana Whirling Dervishes'){
      return this.events[i+10];
    }else if(ename=='Krampusnacht'){
      return this.events[i+11];
    }
  }
}
}

