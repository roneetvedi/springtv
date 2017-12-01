import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';

/**
 * Generated class for the  LinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-links',
  templateUrl: 'links.html'
})
export class LinksPage {

  constructor(public navCtrl: NavController) {

  }

 
home()
 {
 	this.navCtrl.push(HomePage);
 } 
 
}

