
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
// We use the gql tag to parse our query string into a query document
const allNotifications = gql`
  query{
    allcodepads{
      codepad_id
      resource_id
  }
}
`;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy{
  loading: boolean;
  datos: string;
  //datos: ApolloQueryObservable<any>;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo,public navCtrl: NavController) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: allNotifications
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.datos = JSON.stringify(data);
        //  this.datos = String(this.apollo.watchQuery({ query: allNotifications }));
      });
  }
  
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
  
}
