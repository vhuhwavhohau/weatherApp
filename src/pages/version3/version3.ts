import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JsonProvider} from '../../providers/json/json';
import { PopoverController } from 'ionic-angular';

/**
 * Generated class for the Version3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-version3',
  templateUrl: 'version3.html',
})
export class Version3Page {
  popoverCtrl: any;
  toastCtrl: any;
  val_main;val_min;val_max;
  City = "pretoria";
  info
  convert
  
  Kelvin1 :boolean
  KelvintoCelsius1 :boolean
  KelvintoFahrenhei1: boolean


  constructor(public navCtrl: NavController, public navParams: NavParams,private data:JsonProvider , popoverCtrl: PopoverController) {
    this.data.dataInfo(this.City).subscribe(Data =>{
      this.info = Data;
    })
    

   
}

ionViewDidLoad() {
  console.log('ionViewDidLoad Version2Page');
}
onInput(){

  this.data.dataInfo(this.City).subscribe(Data =>{
    this.info = Data;
  })
this.Converter();
}
onCancel(){
this.City = " ";
}

doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  this.data.dataInfo(this.City).subscribe(Data =>{
  this.info = Data;
  })

  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 1000);
  this.Converter();
}


presentToast() {
  const toast = this.toastCtrl.create({
    message: 'Refreshed',
    duration: 3000
  });
  toast.present();
}
Converter(){
  if (this.convert == "Kelvin1"){
    this.Kelvin();

  }
  else if(this.convert == "KelvintoCelsius1"){
    this.KelvintoCelsius();
  }
  else{
    this.KelvintoFahrenheit();
  }
  

}

                      
Kelvin(){
  this.data.dataInfo(this.City).subscribe(Data =>{
    this.info = Data;
    })
    this.val_main = this.info.main.temp;
    this.val_min = this.info.main.temp_min
    this.val_max = this.info.main.temp_max

}
KelvintoCelsius(){
  this.data.dataInfo(this.City).subscribe(Data =>{
    this.info = Data;
    })
    this.val_main = this.info.main.temp 
    this.val_main =  this.val_main - 273.15
    this.val_min = this.info.main.temp_min 
    this.val_min = this.val_min -273.15
    this.val_max = this.info.main.temp_max 
    this.val_max =  this.val_max -273.15 
}
KelvintoFahrenheit(){
  this.data.dataInfo(this.City).subscribe(Data =>{
    this.info = Data;
    })
    this.val_main = this.info.main.temp
    this.val_main = this.val_main * 9/5 - 459.67
    this.val_min = this.info.main.temp_min 
    this.val_min =  this.val_min * 9/5 - 459.67
    this.val_max = this.info.main.temp_max 
    this.val_max = this.val_max  * 9/5 - 459.67
}
presentPopover(myEvent) {
  let popover = this.popoverCtrl.create();
  popover.present({
    ev: myEvent
  });
}

}
