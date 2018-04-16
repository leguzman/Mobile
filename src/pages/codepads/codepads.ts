import { Component, OnInit,OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { EditorPage } from '../editor/editor';

const allNotifications = gql`
  query{
    allcodepads{
      codepad_id,
      resource_id,
      path
  }
}
`;

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
export class CodepadsPage implements OnInit, OnDestroy {
  public buttonClicked: boolean = false; //Whatever you want to initialise it as
  selectedItem: any;
  docs: Array<{title: string, body: string, icon: string}>;
  items: Array<{title: string, content: Object[], icon: string}>;
  files: Array<{title: string, icon: string, id: string, reference_id: string}> = [];
  private querySubscription: Subscription;

  loading: boolean  = false;
  datos: Object;
  cool: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private apollo: Apollo) {
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
  

  public onButtonClick(reference_id) {         
    this.navCtrl.push(EditorPage, { reference_id: reference_id });
  }

  ngOnInit(){
    this.querySubscription = this.apollo.watchQuery<any>({
      query: allNotifications
    })
    .valueChanges
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      for(let codepad of data['allcodepads']){
        this.files.push({
          title: codepad['path'],
          icon: "md-document",
          id: codepad['codepad_id'],
          reference_id: codepad['resource_id']
        })
      }
      //  this.datos = String(this.apollo.watchQuery({ query: allNotifications }));
    });
  }

  ngOnDestroy(){
    this.querySubscription.unsubscribe();
  }

}
