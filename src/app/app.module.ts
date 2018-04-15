import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CodepadsPage } from '../pages/codepads/codepads';
import { OptionsPage } from '../pages/options/options';


import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import { EditorPage } from '../pages/editor/editor';
import { NotificationsPage } from '../pages/notifications/notifications';
import { AboutPage } from '../pages/about/about';
import { RestProvider } from '../providers/rest/rest';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';

export function highlightJsFactory() {
  return hljs;
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CodepadsPage,
    OptionsPage,
    EditorPage,
    NotificationsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CodepadsPage,
    OptionsPage,
    EditorPage,
    NotificationsPage,
    AboutPage
  ],
  providers: [
    StatusBar,      
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    StorageServiceProvider
  ]
})
export class AppModule {
constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: 'http://192.168.99.102:5000/graphql' }),//en windows el nodo es 99.102
      cache: new InMemoryCache()
    });
  }
}
