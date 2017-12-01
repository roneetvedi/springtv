import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BillingaddressPage } from '../billingaddress/billingaddress';

@Component({
  selector: 'page-billing',
  templateUrl: 'billing.html'
})
export class BillingPage {

  constructor(public navCtrl: NavController)  {

  }

   payment(){
 	this.navCtrl.push(BillingaddressPage);
 }
 


}