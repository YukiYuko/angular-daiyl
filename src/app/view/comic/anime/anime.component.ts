import { Component, OnInit ,HostBinding} from '@angular/core';
import {animate, state, style, trigger, transition} from '@angular/animations';

@Component({
  selector: 'anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
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
export class AnimeComponent implements OnInit {

  /**
   * 对于@HostBinding()是属性装饰器，用来给宿主设置属性。在这里我们将动画@fadeInUpState添加到宿主上，同时还将宿主的display的值设置为block。
   * 注意：给宿主添加动画，一定要设置`display`的值，
   * 因为默认自定义元素的display是空字符串，CSS动画是不起作用的。 关于动画的更多细节，可以看《动画(Animation)》一章。著作权归作者所有。
   */
  @HostBinding('@fadeInUpState') fadeInUpState;   
  @HostBinding('style.display') display = 'block';

  public list:Array<any> = [
    {
      imgUrl:'https://images.dmzj.com/news/article/11826/row_59cb6d63682f7.jpg',
      type:'动画',
      title:'动画《奇诺之旅》新作PV公开！',
      time:'2017-09-27 17:29',
      from:'动漫之家 ',
      editor:'梓夏',
      content:'预计从10月6日开始在TOKYO MX等电视台开播的TV动画《奇诺之旅 -the Beautiful World- the Animated Series》公开的第二段PV视频。',
      tag:['PV','奇诺之旅']
    },
    {
      imgUrl:'https://images.dmzj.com/news/article/11817/row_59cb17b6accc8.jpg',
      type:'动画',
      title:'萌妹子×废墟！TV动画《少女终末旅行》PV公开',
      time:'2017-09-27 11:16',
      from:'动漫之家 ',
      editor:'梓夏',
      content:'预计于10月开始播出的TV动画《少女终末旅行》公开了PV视频。在这段视频中，可以请到有水濑祈与久保由利香两人为主人公们配音的声音，在背景音乐的衬托下，展现了两名少女在孤独的终末世界中的旅行。。',
      tag:['PV','少女终末旅行']
    },
    {
      imgUrl:'https://images.dmzj.com/news/article/11800/row_59c9d1e916f63.jpg',
      type:'动画',
      title:'《Princess Principal》官方：想要第二季请买盘或氪手游！',
      time:'2017-09-26 12:06',
      from:'动漫之家 ',
      editor:'梓夏',
      content:'在《Princess Principal》官方广播中，谈到了有关第二季的相关内容。官方表示：“如果BD或DVD卖得好，或者本作的手游人气高的话，会积极就动画续篇的制作展开讨论”。',
      tag:['Princess Principal']
    },
    {
      imgUrl:'https://images.dmzj.com/news/article/11799/row_59c9cedd9348c.jpg',
      type:'动画',
      title:'令人窒息 《兽娘动物园》たつき监督被撤换',
      time:'2017-09-26 11:54',
      from:'动漫之家 ',
      editor:'卷_毛_',
      content:'昨天，《兽娘动物园》监督たつき突然发推宣布自己已经离开了兽娘的动画制作，目前这条推特转发量已经达到29万，监督本人的话题也登上了twitter全球趋势的一位。',
      tag:['每日话题','兽娘动物园','たつき监督']
    },
    {
      imgUrl:'https://images.dmzj.com/news/article/11796/row_59c9ad295c2fe.jpg',
      type:'动画',
      title:'动画《魔法禁书目录》第三季制作决定？',
      time:'2017-09-26 09:29',
      from:'动漫之家 ',
      editor:'梓夏',
      content:'根据aniculbu偷跑消息，在10月1日放送的节目中，将谈到《魔法禁书目录》系列的一些秘密内容。其中，包括了《魔法禁书目录》第三季已经确定播出，第三季的内容是什么的这个问题。',
      tag:['魔法禁书目录']
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
