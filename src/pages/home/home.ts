import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JsonProvider} from '../../providers/json/json';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
cities;
info;
info1;
list;
City="pretoria"


  constructor(public navCtrl: NavController, public navParams: NavParams, public data: JsonProvider) {
 
    this.data.dataInfo(this.City).subscribe(Data =>{
      this.info = Data;
   console.log(data)
      
      
    })
     

  }

  ionViewDidLoad() {
 
  }

  method(){
    this.data.dataInfo(this.City).subscribe(Data =>{
      this.info = Data; 
      this.list = this.info.weather; 
    })
     
  }

}
