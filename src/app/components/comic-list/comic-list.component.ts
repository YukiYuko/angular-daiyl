import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
