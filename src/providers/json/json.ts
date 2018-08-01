import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonProvider {

  constructor(public http: HttpClient) {

  }
  dataInfo(City:string){
   return(this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+City+'&APPID=a04df01552d0641ad504d4e1a936c85c'));
    
  }

}
