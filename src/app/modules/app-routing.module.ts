import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ComicComponent } from '../view/comic/comic.component';
import { AnimeComponent } from '../view/comic/anime/anime.component';
import { CartoonComponent } from '../view/comic/cartoon/cartoon.component';
import { GameComponent } from '../view/comic/game/game.component';

import { HomeComponent } from '../view/home/home.component';
import { NewsDetailComponent } from '../view/news-detail/news-detail.component';

// 定义路由
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent}, 
    { 
        path: 'comic', 
        component: ComicComponent,
        children:[
            { path: 'anime', component: AnimeComponent}, 
            { path: 'cartoon', component: CartoonComponent}, 
            { path: 'game', component: GameComponent}, 
        ]
    },
    { path: 'newsDetail/:id', component: NewsDetailComponent},
];   

// 导入导出路由模块
@NgModule({   
    imports: [   
        RouterModule.forRoot(routes)   
    ],   
    exports: [RouterModule]  
})  

export class AppRoutingModule { }