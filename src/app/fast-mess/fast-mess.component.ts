import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fast-mess',
  templateUrl: './fast-mess.component.html',
  styleUrls: ['./fast-mess.component.css']
})
export class FastMessComponent implements OnInit {

  timer:any = '';
  cloneNode:any = '';
  length:any = '';
  height:any = '';
  currentIndex:number = 0;
  currenTranslateY: number = 0;
  duration:number = 300;
  interval:number = 2000;
  noAnimate: boolean = false;
  currentStyles = {
    'transform':`translate3d(0,${this.currenTranslateY}px,0)`,
    'transition': `transform ${this.duration}ms`
  };

  public messList:Array<any> = [
    {id:1,title:'这是第一条资讯哦'},
    {id:2,title:'这是第二条资讯哦'},
    {id:3,title:'这是第三条资讯哦'},
  ]

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this._init();
    this._start();
  }

  public _init() {
    this._destroy();

    if (this.cloneNode) {
      document.querySelector('.scrollBox').removeChild(this.cloneNode)
    }

    this.cloneNode = null;

    let firstItem = document.querySelector('.scrollBox').firstElementChild;
    if (!firstItem) {
      return false
    }

    this.length = document.querySelector('.scrollBox').children.length;
    this.height = firstItem.clientHeight

    this.cloneNode = firstItem.cloneNode(true)
    document.querySelector('.scrollBox').appendChild(this.cloneNode)

  }
  public _start() {
    this.timer = setInterval(()=>{
      this.currentIndex += 1;
      this.currenTranslateY = -this.currentIndex * this.height;
      this.currentStyles = {
        'transform':`translate3d(0,${this.currenTranslateY}px,0)`,
        'transition': `transform ${this.duration}ms`
      };

      if (this.currentIndex === this.length) {
        setTimeout(() => {
          this._go(true)
        }, this.duration)
      } else {
        this.noAnimate = false
      }
    },2000);

  }
  public _go(toFirst:boolean) {
    this.currentIndex = 0;
    this.currenTranslateY = 0;
    this.currentStyles = {
      'transform':`translate3d(0,${this.currenTranslateY}px,0)`,
      'transition': `transform 0ms`
    };
  }
  public _destroy(): void {
    this.timer && clearInterval(this.timer)
  }
}
