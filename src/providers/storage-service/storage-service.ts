import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StorageServiceProvider Provider');
  }

  downloadFromURL(url){
    return this.http.get(url, {responseType: 'text'});
  }

}
