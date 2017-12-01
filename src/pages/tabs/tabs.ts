


import { Component } from '@angular/core';
import { SerialsPage } from '../serials/serials';
import { MoviesPage } from '../movies/movies';
import { DownloadfilesPage } from '../downloadfiles/downloadfiles';
import { ActorsgalleryPage } from "../actorsgallery/actorsgallery";
import { MoviestrailerPage } from "../moviestrailer/moviestrailer";
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  currState: string;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SerialsPage;
  tab2Root: any = MoviesPage;
  tab3Root: any = DownloadfilesPage;
  tab4Root: any = ActorsgalleryPage;
  tab5Root: any = MoviestrailerPage;


  constructor() {

  }
onTabUpdate(event){
        let newIndexAfterUpdate = event.activeIndex;
        this.currState = String(newIndexAfterUpdate);
 }
}
