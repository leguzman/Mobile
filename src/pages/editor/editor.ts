import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageservice: StorageServiceProvider) {
    let obs = this.storageservice.downloadFromURL("https://gist.githubusercontent.com/amicis31/c001160edb3cb7f846d901c4120587b9/raw/76abb20576d24e5f4b659aea944c0145c1fa0fc2/temp.py");
    console.log('ionViewDidLoad EditorPage');
    obs.subscribe(data => {
      this.currentCodepad = data;
    });
  }

  ionViewDidLoad() {
    
  }
}
