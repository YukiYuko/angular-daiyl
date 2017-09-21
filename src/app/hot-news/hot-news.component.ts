import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})
export class HotNewsComponent implements OnInit {

  public list:Array<any> = [
    {imgUrl:'https://images.dmzj.com/news/article/11737/row_59c31910d6677.jpg',title:'P站美图推荐——红线特辑',time:'2017-09-21 09:58',tucao:350,top:1},
    {imgUrl:'https://images.dmzj.com/news/article/11736/row_59c31900c9c3f.jpg',title:'路人女主遥遥领先！富士见Fantasia文库泳装人气投票半程结果',time:'2017-09-21 09:44',tucao:220,top:2},
    {imgUrl:'https://images.dmzj.com/news/article/11735/row_59c23d2412e27.jpg',title:' 秋叶原总研秋番动画期待度排行半程结果发表！',time:'2017-09-20 18:05',tucao:180,top:3},
    {imgUrl:'https://images.dmzj.com/news/article/11733/row_59c22af6db72b.jpg',title:'《钢之炼金术师》动画版导演批评真人版！不应该全由日本人演',time:'2017-09-20 16:47',tucao:150},
    {imgUrl:'https://images.dmzj.com/news/article/11729/row_59c215fc10872.jpg',title:'全动画ADV！《命运石之门：Elite》新登陆Switch',time:'2017-09-20 15:19',tucao:140},
  ]
  constructor() { }

  ngOnInit() {
  }

}
