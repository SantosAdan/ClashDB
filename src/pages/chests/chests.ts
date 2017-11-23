import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Component({
  selector: 'page-chests',
  templateUrl: 'chests.html'
})
export class ChestsPage {

  chests: any[];

  constructor(public navCtrl: NavController, private http: Http) {

  }

  ionViewDidLoad () {
    this.getChests();
  }

  getChests () {
    this.http.get('http://www.clashapi.xyz/api/chests/')
      .map((res:Response) => res.json())
      .subscribe(res => {
          this.chests = res;

          this.chests.map((chest) => {
            chest.idName = chest.idName.replace('-1', '');
          });

          this.chests = _.filter(this.chests, {'arena': 1});
          console.log(this.chests);
        },
        err => {

        });
  }

}
