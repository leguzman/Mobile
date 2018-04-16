import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';


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
export class EditorPage implements OnInit, OnDestroy {

  public currentCodepad;
  public currentURL;
  public codeid;
  private reference;
  private querySubscription: Subscription;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private afStorage: AngularFireStorage, private http: HttpClient, private apollo: Apollo) {
    console.log('ionViewDidLoad EditorPage');

    // Getting codepad id
    this.reference = this.navParams.get('reference_id');
    this.codeid = this.navParams.get('codeid');
    //Asking to codepads microservice for the reference to firebase

    // Gets the reference on firebase
    let obs;
    if(this.reference){
      obs = this.afStorage.ref(this.reference);
    }else{
      obs = this.afStorage.ref('hola.py')
    }
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

  deleteReference(ref){
    if(ref){
      const queryDefinition = gql`  
      mutation { 
        deletecodepad(id: "${ref}"){
          codepad_id
        }
      }
      `

      this.querySubscription = this.apollo.mutate({
        mutation: queryDefinition,
      })
      .subscribe(({ data, loading }) => {      
        //  this.datos = String(this.apollo.watchQuery({ query: allNotifications }));
        
      });
      alert("Deleted codepad: " + ref);
    }

  }

  ngOnInit(){
    
  }

  ngOnDestroy(){


  }

}
