import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  private apiUrl = 'https://randomuser.me/api/?results=25';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


  getUsers(): Observable<{}> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  postDatos(){
    let datos = { nombre:'Edu',email:'edu.revilla.vaquero@gmail.com'}
    
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
   var url = 'www.miservicio.com/adduser/';
   return new Promise(resolve => {
    this.http.post(url,JSON.stringify(datos),options)
       .subscribe(data => {
         resolve(data);
        });
   });
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
