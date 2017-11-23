import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-card-details',
  templateUrl: 'card-details.html',
})
export class CardDetailsPage {

  cardId: string;
  card: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.cardId = this.navParams.get('id');
  }

  ionViewDidLoad () {
    this.getCard();
  }

  getCard () {
    this.http.get(`http://www.clashapi.xyz/api/cards/${this.cardId}`)
      .map((res:Response) => res.json())
      .subscribe(res => {
          this.card = res;
        },
        err => {

        });
  }

}
