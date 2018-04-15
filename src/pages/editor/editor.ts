import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

/**
 * Generated class for the EditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html'
})
export class EditorPage {

  public currentCodepad;
  public currentURL;


  
  constructor(public navCtrl: NavController, public navParams: NavParams, private afStorage: AngularFireStorage, private http: HttpClient) {
    console.log('ionViewDidLoad EditorPage');

    // Gets the reference on firebase
    let obs = this.afStorage.ref('hola.py');

    // Returns an observable with the URL information
    obs.getDownloadURL()
      .switchMap(url => {
        // We make a observable with that url, that returns the text
        return this.http.get(url, {responseType: 'text' });     
      })
    .subscribe(data => {
      // We connect our variable with the contents of the file
      this.currentCodepad = data
    });
    

  }
  ionViewDidLoad() {
    
  }

  updateCodewithReference(reference){
    let obs = this.afStorage.ref(reference);

    // Returns an observable with the URL information
    obs.getDownloadURL()
      .switchMap(url => {
        // We make a observable with that url, that returns the text
        return this.http.get(url, {responseType: 'text' });     
      })
    .subscribe(data => {
      // We connect our variable with the contents of the file
      this.currentCodepad = data
    });
  }

}
