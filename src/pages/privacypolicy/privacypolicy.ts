import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutusPage } from '../aboutus/aboutus';
import {CommonProvider} from '../../providers/common/common';
import {Http, Headers, RequestOptions} from '@angular/http';
 import 'rxjs/add/operator/map';
import { AccountPage } from '../account/account';
@Component({
  selector: 'page-privacypolicy',
  templateUrl: 'privacypolicy.html'
})
export class PrivacypolicyPage {
  public head='';
  public descrip='';

  constructor(public navCtrl: NavController,public http:Http, public common : CommonProvider) {
      this.listing();
  }

     listing(){
    // alert('about us');
 console.log(this.common.options);
var optionss = this.common.options;
 this.http.get(this.common.base_url +'pages/pagelist', optionss).map(res=>res.json()).subscribe(data=>{
    console.log(data);
    
      if(data.error == 0){

    console.log(data.data[1]);
    this.descrip=data.data[1].description
    this.head=data.data[1].title

  //       let toast = this.toastCtrl.create({
  //   message: data.message,
  //   duration: 3000,
  //   position: 'middle'
  // });
  //  toast.present();
      
     

      }else{
        //alert(data.message);
  //       let toast = this.toastCtrl.create({
  //   message: data.message,
  //   duration: 3000,
  //   position: 'middle'
  // });
  //  toast.present();
      }

    })}
serializeObj(obj) {
            var result = [];
            for (var property in obj)
              result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

            return result.join("&");
          }
 backtoaccount(){
   this.navCtrl.push(AccountPage);
 }
}
