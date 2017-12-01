import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarddetailPage } from '../carddetail/carddetail';
import { PymntplanPage } from "../pymntplan/pymntplan";
import { TabsPage } from '../tabs/tabs';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {CommonProvider} from '../../providers/common/common';
/**
 * Generated class for the  ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmPage {
  public cary='';
  user: string;
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
 public planname='';

  constructor(public navCtrl: NavController,public navParams:NavParams,  public common : CommonProvider,
              public http:Http,
              private toastCtrl: ToastController,
              public loadingCtrl:LoadingController) {
      this.hititfirst();
      
  }
    hititfirst(){
      this.user=localStorage.getItem('USERID');
      console.log(this.common.options);
var optionss = this.common.options;
                   
                                  var data_pay = {
                                    userid:this.user,
                                   
                                  } 
                                  //  alert(JSON.stringify(data_pay));
                    var serializ = this.serializeObj(data_pay); 
                    console.log(serializ);
                    // var urlenpost= this.common.base_url  + 'payment/paymentgateway';    
                     this.http.post(this.common.base_url +'plan/plandata',serializ, optionss).map(res=>res.json()).subscribe(dataa=>{
                      //  alert("suceess");
                      //  alert(JSON.stringify(dataa));
                       this.cary=dataa.data;
                      
                        //  alert(JSON.stringify(this.cary));
                      this.Loading.dismiss();
                      let toast = this.toastCtrl.create({
                        message: 'Payment Succefully Completed',
                        duration: 3000,
                        position: 'middle'
                      });
                       toast.present();
                                          //  alert(JSON.parse(ids));
                      this.navCtrl.push(ConfirmPage);                    
                                        },err=>{
                                          alert('err');
                                          alert(err);
                                          alert(JSON.stringify(err));
                                        })
                                      

    }
     serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
 
 backtomain(){
   this.navCtrl.push(TabsPage);
 }
  movetoplan(){
     this.navCtrl.push(PymntplanPage);
  }
}

