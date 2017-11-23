import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from "@angular/http";
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  videos: any[] = [];
  videosIds: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              private youtube: YoutubeVideoPlayer) {
    this.videosIds = [
      'TJryIc0Cwy4',
      'psZXKWHkKkE',
      '9o2PCs4sfFQ',
      'gqX_lGeE4ZI',
      'vsNSLCiAaq0',
      'CwLFks0W2Rw',
      'k7a8OiNDSM4'
    ];
  }

  ionViewDidLoad() {
    this.getVideos();
  }

  getVideos () {
    for (let videoId of this.videosIds) {
      this.http.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyBqchJlJkjQbtmgZ0xeBszuFD_jGVot3Ps%20&part=snippet`)
        .map((res:Response) => res.json())
        .subscribe(res => {
          this.videos.push(res);
        },
          err => {
            console.log(err);
          });
    }
  }

  goToVideo (videoId) {
    this.youtube.openVideo(videoId);
  }
}
