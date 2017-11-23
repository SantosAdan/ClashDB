import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import {CardDetailsPage} from "../card-details/card-details";

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {

  cards: any[];
  selected: string = 'name';

  constructor(public navCtrl: NavController, private http: Http, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad () {
    this.getCards();
  }

  getCards () {
    this.http.get('http://www.clashapi.xyz/api/cards/')
      .map((res:Response) => res.json())
      .subscribe(res => {
        this.cards = res;

          this.cards = _.orderBy(this.cards, 'name', 'asc');
      },
        err => {

        });
  }

  orderBy (attribute) {
    this.presentLoading();

    this.selected = attribute;
    this.cards = _.orderBy(this.cards, [attribute, 'elixirCost']);
  }

  goToDetails (card_id) {
    this.navCtrl.push(CardDetailsPage, {
      id: card_id
    });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: 'Reordenando...',
      duration: 500
    });
    loader.present();
  }
}
