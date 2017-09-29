import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public list:Array<any> = [
    {
      imgUrl:'https://images.dmzj.com/news/article/11752/row_59c38329c4ef2.jpg',
      type:'杂类',
      title:'再现鹫巢麻将完结篇！电视剧《斗牌传说》新作制作决定',
      time:'2017-09-21 17:19',
      from:'动漫之家 ',
      editor:'梓夏',
      content:'根据福本伸行创作的漫画《斗牌传说》制作的新作真人电视剧，宣布了将在2018年推出新作《斗牌传说～鹫巢麻将完结篇～》！新作将接续电视剧第一季结尾，预计将由全3话构成。',
      tag:['斗牌传说','真人']
    },
    {
      imgUrl:'https://images.dmzj.com/news/article/11751/row_59c37fdae5fc2.jpg',
      type:'动画',
      title:'征途是新的星辰大海！《银河英雄传说》新作PV公开',
      time:'2017-09-21 17:04',
      from:'动漫之家 ',
      editor:'卷_毛_',
      content:'近几年，日本业界似乎越来越多炒冷饭作品，田中芳树的《银河英雄传说》此前也宣布将要推出全新动画。最近，官方终于公布了新作动画《银河英雄传说 Die Neue These 邂逅》的PV等详细消息，一起来看看吧~',
      tag:['银河英雄传说']
    },
    {
      imgUrl:'https://images.dmzj.com/news/article/11750/row_59c37a2e08ecd.jpg',
      type:'美图',
      title:'这个美背我承包了！《尼尔：机械纪元》的COSPLAY欣赏',
      time:'2017-09-21 16:42',
      from:'动漫之家 ',
      editor:'矢田Kuriko',
      content:'最近《尼尔：机械纪元》这款游戏的人气越来越火，关于两位主角的COS作品也越来越多，而真正用COS质量打动人的作品并不多..',
      tag:['COSPLAY','机械纪元']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
