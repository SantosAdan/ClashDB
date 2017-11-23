import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NewsPage } from "../pages/news/news";
import { ChestsPage } from "../pages/chests/chests";
import { ArenasPage } from "../pages/arenas/arenas";
import { CardsPage } from "../pages/cards/cards";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import {CardDetailsPage} from "../pages/card-details/card-details";
import {ArenaDetailsPage} from "../pages/arena-details/arena-details";
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";


@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    CardDetailsPage,
    ArenasPage,
    ArenaDetailsPage,
    ChestsPage,
    NewsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    CardDetailsPage,
    ArenasPage,
    ArenaDetailsPage,
    ChestsPage,
    NewsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
