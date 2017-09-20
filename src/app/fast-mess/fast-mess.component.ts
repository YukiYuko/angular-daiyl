import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fast-mess',
  templateUrl: './fast-mess.component.html',
  styleUrls: ['./fast-mess.component.css']
})
export class FastMessComponent implements OnInit {

  public messList:Array<any> = [
    {id:1,title:'这是第一条资讯哦'},
    {id:2,title:'这是第二条资讯哦'},
    {id:3,title:'这是第三条资讯哦'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
