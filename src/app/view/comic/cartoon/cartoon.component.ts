import { Component, OnInit ,HostBinding} from '@angular/core';
import {animate, state, style, trigger, transition} from '@angular/animations';

@Component({
  selector: 'cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.css'],
  animations: [    
    trigger('fadeInUpState', [   
      state('in', style({opacity: 1, transform: 'translate3d(0, 0, 0)'})),   
      transition('void => *', [   
        style({   
          opacity: 0,   
          transform: 'translate3d(100px, 0, 0)'   
        }), 
        animate('.4s cubic-bezier(.25,.8,.25,1)')   
      ])  
    ])   
  ]  
})
export class CartoonComponent implements OnInit {

  /**
   * 对于@HostBinding()是属性装饰器，用来给宿主设置属性。在这里我们将动画@fadeInUpState添加到宿主上，同时还将宿主的display的值设置为block。
   * 注意：给宿主添加动画，一定要设置`display`的值，
   * 因为默认自定义元素的display是空字符串，CSS动画是不起作用的。 关于动画的更多细节，可以看《动画(Animation)》一章。著作权归作者所有。
   */
  @HostBinding('@fadeInUpState') fadeInUpState;   
  @HostBinding('style.display') display = 'block';
  constructor() { }

  ngOnInit() {
  }

}