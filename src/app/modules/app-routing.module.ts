import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ComicComponent } from '../view/comic/comic.component';
import { HomeComponent } from '../view/home/home.component';

// 定义路由
const routes: Routes = [     
    { path: 'home', component: HomeComponent}, 
    { path: 'comic', component: ComicComponent},   
];   

// 导入导出路由模块
@NgModule({   
    imports: [   
        RouterModule.forRoot(routes)   
    ],   
    exports: [RouterModule]  
})  

export class AppRoutingModule { }