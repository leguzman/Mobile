import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


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
    HttpClientModule,
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
    RestProvider
  ]
})
export class AppModule {
}
