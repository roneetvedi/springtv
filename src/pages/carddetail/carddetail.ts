import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the  CarddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carddetail',
  templateUrl: 'carddetail.html'
})
export class CarddetailPage {

  constructor(public navCtrl: NavController) {

  }
home()
 {
 	this.navCtrl.push(HomePage);
 } 
 
 
}

