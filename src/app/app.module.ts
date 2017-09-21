import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BannerComponent } from './banner/banner.component';
import { FastMessComponent } from './fast-mess/fast-mess.component';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { LatestComicShowComponent } from './latest-comic-show/latest-comic-show.component';
import { AboutLinkComponent } from './about-link/about-link.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BannerComponent,
    FastMessComponent,
    HotNewsComponent,
    LatestComicShowComponent,
    AboutLinkComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
