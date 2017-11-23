import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Response} from "@angular/http";
import {CardDetailsPage} from "../card-details/card-details";


@Component({
  selector: 'page-arena-details',
  templateUrl: 'arena-details.html',
})
export class ArenaDetailsPage {

  arenaId: string;
  arena: any;
  cards: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.arenaId = this.navParams.get('id');
  }

  ionViewDidLoad () {
    this.getCard();
  }

  getCard () {
    this.http.get(`http://www.clashapi.xyz/api/arenas/${this.arenaId}`)
      .map((res:Response) => res.json())
      .subscribe(res => {
          this.arena = res;

          this.getCardsUnlocked();
        },
        err => {

        });
  }

  getCardsUnlocked () {
    for (let card of this.arena.cardUnlocks) {
      this.http.get(`http://www.clashapi.xyz/api/cards/${card}`)
        .map((res:Response) => res.json())
        .subscribe(res => {
            this.cards.push(res);
            console.log(this.cards);
          },
          err => {

          });
    }
  }

  goToCardDetails (card_id) {
    this.navCtrl.push(CardDetailsPage, {
      id: card_id
    });
  }

}
