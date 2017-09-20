import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BannerComponent } from './banner/banner.component';
import { FastMessComponent } from './fast-mess/fast-mess.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BannerComponent,
    FastMessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
