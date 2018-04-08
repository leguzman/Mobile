import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CodepadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-codepads',
  templateUrl: 'codepads.html',
})
export class CodepadsPage {
  public buttonClicked: boolean = false; //Whatever you want to initialise it as
  selectedItem: any;
  docs: Array<{title: string, body: string, icon: string}>;
  items: Array<{title: string, content: Object[], icon: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.docs = [];
    for (let i = 1; i < 4; i++) {
      this.docs.push({
        title: 'Doc ' + i,
        body: 'This is doc #' + i,
        icon: 'md-document'
      });
    }


    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Folder ' + i,
        content: [
          {title: 'Doc ' + i,    body: 'This is doc #' + 1+" of folder"+i,     icon: 'md-document'  },
          {title: 'Doc ' + i,    body: 'This is doc #' + 2+" of folder"+i,     icon: 'md-document'  },
          {title: 'Doc ' + i,    body: 'This is doc #' + 3+" of folder"+i,     icon: 'md-document'  }
         ],
        icon: 'md-folder'
      });
    }
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CodepadsPage');
  }
  

    public onButtonClick(item) {     
        
        this.selectedItem= item.content;
        this.buttonClicked = !this.buttonClicked;
    }
}
