import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider } from '@angular/compiler/src/core';
import {JsonProvider} from '../../providers/json/json';
/**
 * Generated class for the Version2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-version2',
  templateUrl: 'version2.html',
})
export class Version2Page {
City ;
info
  constructor(public navCtrl: NavController, public navParams: NavParams,private data:JsonProvider) {
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
  }
  onCancel(){
this.City = " ";
  }





  
}
