import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'latest-comic-show',
  templateUrl: './latest-comic-show.component.html',
  styleUrls: ['./latest-comic-show.component.css']
})
export class LatestComicShowComponent implements OnInit {

  public list:Array<any> = [
    {
      imgUrl:'http://www.005.tv/uploads/allimg/170830/6-1FS015240B15.png',
      title:'2017WESTJOY中国西部动漫数字互动娱乐展中国Cosplay TOP榜陕西赛区预选赛',
      time:'2017-08-30',
      content:'赛事信息 Cosplay(动漫角色扮演）-top榜是国内COSPLAY顶级赛事之一。专业、公平、公正、公开、关注度最高、观赏性最佳。Top榜...'
    },
    {
      imgUrl:'http://www.005.tv/uploads/allimg/170830/6-1FS0141952O4.png',
      title:'古都二次元感谢祭3.0暨2017西部动漫节陕西赛区预选赛',
      time:'2017-08-30',
      content:'时间又来到了2017年9月 开学了 又要见到那些害怕见到的人(┙)┙へ┻┻ 假期后再也不能够天天睡懒觉,提炼农药技术,学习葛优...'
    },
    {
      imgUrl:'http://www.005.tv/uploads/allimg/170802/6-1FP2154S0a5.png',
      title:'烟台碧海祭同人交流会盛情引入“国产动画精品展映”',
      time:'2017-08-02',
      content:'蓝天碧海，晨风微凉，酷暑的夏日里，唯有一杯冰凉的苹果汁与烟台碧海祭6.0才是你最可靠的解暑神器，就在今夏，烟台碧海...'
    },
    {
      imgUrl:'http://www.005.tv/uploads/allimg/170727/32-1FHGH6395b.png',
      title:'2017ChinaJoy ——“同行十五载，共享泛娱乐',
      time:'2017-07-27',
      content:'作为目前全球泛娱乐领域最具影响力和产业风向标意义的年度盛会，ChinaJoy已成功举办14届。每年七月下旬，全球游戏业界人...'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
