import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './modules/app-routing.module';   
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

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
import { ButtonDirective } from './directive/button/button.directive';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { TimeComponent } from './components/time/time/time.component';

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
    GameComponent,
    ButtonDirective,
    ComicListComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
