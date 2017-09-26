import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

/**
 * 在下面的代码中，我们注入ActivatedRoute服务并定义了一个私有属性route，然后通过route.params属性来获取路由参数，ActivatedRoute.params是一个路由参数的可观察对象(BehaviorSubject)，
 * 所以我们要通过subscribe()方法来访问。
 * 注：所有的路由参数或查询参数都是字符串。
 */

  public id:any;   
  constructor(private route: ActivatedRoute) {   
    // console.log(this.route.params)
    this.route.params.subscribe(param => {   
      this.id = param.id;
    })    

  }  

  ngOnInit() {
  }

}
