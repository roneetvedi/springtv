

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccountPage } from '../account/account';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {CommonProvider} from '../../providers/common/common';
import { ModalPage } from '../modal/modal';
import { LoadingController, App } from 'ionic-angular';
import { SigninPage } from "../signin/signin";

/**
 * Generated class for the DownloadfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-downloadfiles',
  templateUrl: 'downloadfiles.html'
})
export class DownloadfilesPage {
  check_value: any;
  serials: any;
  randno: string;
  user: string;
  downid: any;
  movies: any;
  errorValue: string;
  myInput: any;
  down : any;
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  constructor(public navCtrl: NavController,public navParams: NavParams,
        public http:Http,public loadingCtrl:LoadingController,
        public common : CommonProvider,public app:App) {
          this.user= localStorage.getItem('USER_EMAIL');
          console.log(this.user);
         this.check()
    this.randno=localStorage.getItem('RANDOM');
    console.log(this.randno);
  }
    check(){
  this.Loading.present();
  // alert('loading data');
 var datay1 = {
      email:this.user
    }
   var Serialized = this.serializeObj(datay1);
console.log(this.common.options);
var option = this.common.options;
this.http.post(this.common.base_url +'users_login_check',Serialized,option).map(res=>res.json()).subscribe(data=>{
   
  console.log(data);
    this.serials = data;
    this.check_value=data.user
      console.log(this.randno);
         console.log( this.check_value);
   if(this.randno==this.check_value)
     {
        this.Loading.dismiss();
        this.listing();
     }else{
          localStorage.clear();
    this.app.getRootNav().setRoot(SigninPage);
     this.Loading.dismiss();
     }
   
  })
}
 listing(){
  // alert('loading data');
  this.Loading.present();
  //  var datay1 = {
  //     loaddata:0
  //   }
  //  var Serialized = this.serializeObj(datay1);
console.log(this.common.options);
var option = this.common.options;
this.http.get(this.common.base_url +'downloads/downloadfile',option).map(res=>res.json()).subscribe(data=>{
   
  console.log(data);
    // alert(data);
    // alert(JSON.stringify(data));
    if(data.error == 0){
       this.errorValue = '2'; 
      this.down = data.data;
      this.downid= data.data._id;
      // this.load = data.loadmore;
      // this.navCtrl.push(SerialsPage); 
    this.Loading.dismiss();
    }else{
      // alert("error ouccured");
    }
  })
}
setFilteredItems(){
  
  console.log(this.myInput);
  var keyword = this.myInput.replace(/^\s\s*/, '').replace(/\s\s*$/, '');;
  console.log(keyword);
  console.log(keyword.length);
    
  if(keyword.length == 0) {
    //this.ListScheduledPatients();
    console.log('plz write something');
    this.errorValue = '2'; 
    console.log(this.errorValue);
    this.listing();
  } else {
    this.down = this.getItems(keyword);
   console.log('Filtering');
   this.errorValue = '0';
   console.log(this.errorValue);
  } 
}
 
  getItems(ev) {
      return  this.down.filter((item: any) => {
        console.log(item);
        return item.title.toLowerCase().indexOf(ev.toLowerCase()) > -1;
      }); 
  }
   
 serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
 account()
 {
  this.app.getRootNav().setRoot(AccountPage);
 } 

 
}

