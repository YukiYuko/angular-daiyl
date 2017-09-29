import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() list:Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
