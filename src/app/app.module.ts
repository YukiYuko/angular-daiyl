import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './modules/app-routing.module';   

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
