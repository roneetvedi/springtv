import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BillingaddressPage } from '../billingaddress/billingaddress';

@Component({
  selector: 'page-shippingaddress',
  templateUrl: 'shippingaddress.html'
})
export class ShippingaddressPage {

  constructor(public navCtrl: NavController)  {

  } 
 
 backtobilngadd(){
 	this.navCtrl.push(BillingaddressPage);
 }

}