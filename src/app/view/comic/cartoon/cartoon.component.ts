import { Component, OnInit ,HostBinding} from '@angular/core';
import {animate, state, style, trigger, transition} from '@angular/animations';
import {BookService} from '../../../service/book/book.service';
@Component({
  selector: 'cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.scss'],
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
  ],
  providers:[BookService]  
})
export class CartoonComponent implements OnInit {

  /**
   * 对于@HostBinding()是属性装饰器，用来给宿主设置属性。在这里我们将动画@fadeInUpState添加到宿主上，同时还将宿主的display的值设置为block。
   * 注意：给宿主添加动画，一定要设置`display`的值，
   * 因为默认自定义元素的display是空字符串，CSS动画是不起作用的。 关于动画的更多细节，可以看《动画(Animation)》一章。著作权归作者所有。
   */
  @HostBinding('@fadeInUpState') fadeInUpState;   
  @HostBinding('style.display') display = 'block';

  /**
   * 在上面的代码中，我们做了三步工作： 
   * 1. 将BookService服务添加到@Component组件的元数据底部添加providers数组属性中。 
   * 2. 将BookService注入到构造方法中，并定义了一个私有属性bookService。
   * 3. 在OnInit()生命钩子函数中调用服务并获取书籍数据 
   * 注：
      providers数组告诉 Angular，当它创建新的DemoServiceComponent组件时，也要创建一个BookService的新实例。
      尽量不要在构造方法中获取服务数据，要在生命钩子函数中调用。
  */

  list: any[];
  constructor(private bookService: BookService) { }    
  ngOnInit() {   
    this.bookService.getBooks()   
    .then(res => {   
      this.list = res.list;
    });   
  }  
}