import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  public time:any;
  constructor() { }

  ngOnInit() {
    this.time = new Date();
    setInterval(()=>this.time = new Date(),1000)
  }

}
