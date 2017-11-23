import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import {ArenaDetailsPage} from "../arena-details/arena-details";

@Component({
  selector: 'page-arenas',
  templateUrl: 'arenas.html'
})
export class ArenasPage {

  arenas: any[];

  constructor(public navCtrl: NavController, private http: Http) {

  }

  ionViewDidLoad () {
    this.getArenas();
  }

  getArenas () {
    this.http.get('http://www.clashapi.xyz/api/arenas/')
      .map((res:Response) => res.json())
      .subscribe(res => {
          this.arenas = res;
        },
        err => {

        });
  }

  goToDetails (arena_id) {
    this.navCtrl.push(ArenaDetailsPage, {
      id: arena_id
    });
  }

}
