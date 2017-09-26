import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './modules/app-routing.module';   
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BannerComponent } from './banner/banner.component';
import { FastMessComponent } from './fast-mess/fast-mess.component';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { LatestComicShowComponent } from './latest-comic-show/latest-comic-show.component';
import { AboutLinkComponent } from './about-link/about-link.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ComicComponent } from './view/comic/comic.component';
import { HomeComponent } from './view/home/home.component';
import { NewsDetailComponent } from './view/news-detail/news-detail.component';
import { AnimeComponent } from './view/comic/anime/anime.component';
import { CartoonComponent } from './view/comic/cartoon/cartoon.component';
import { GameComponent } from './view/comic/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BannerComponent,
    FastMessComponent,
    HotNewsComponent,
    LatestComicShowComponent,
    AboutLinkComponent,
    ListItemComponent,
    ComicComponent,
    HomeComponent,
    NewsDetailComponent,
    AnimeComponent,
    CartoonComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
