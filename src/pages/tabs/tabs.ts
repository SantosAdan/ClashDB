import { Component } from '@angular/core';

import {CardsPage} from "../cards/cards";
import {ChestsPage} from "../chests/chests";
import {ArenasPage} from "../arenas/arenas";
import {NewsPage} from "../news/news";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CardsPage;
  tab2Root = ArenasPage;
  tab3Root = ChestsPage;
  tab4Root = NewsPage;

  constructor() {

  }
}
