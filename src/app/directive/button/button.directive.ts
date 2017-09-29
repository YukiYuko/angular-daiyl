import { Directive ,HostBinding,ElementRef, AfterViewInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[button]'
})
export class ButtonDirective {
  // HostBinding 给宿主设置属性 和 绑定事件
  //@HostBinding('style.font-size') fontSize = '20px';
  //@HostBinding('style.background') background = '#fff';

  /**
   * 
   * @param er    得到添加了appButton属性的元素
   * @param renderer2   Angular提供的DOM API操作
   */
  constructor(private er: ElementRef, private renderer2: Renderer2) { }    
    ngAfterViewInit() {   
      this.renderer2.addClass(this.er.nativeElement, 'slide');   
    }  
}
